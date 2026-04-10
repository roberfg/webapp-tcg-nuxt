export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const imageUrl = query.url as string

    if (!imageUrl) {
        throw createError({ statusCode: 400, message: 'Missing url parameter' })
    }

    const allowedDomains = ['images.pokemontcg.io', 'cards.scryfall.io']
    
    try {
        const url = new URL(imageUrl)
        if (!allowedDomains.includes(url.hostname)) {
            throw createError({ statusCode: 403, message: 'Domain not allowed' })
        }
    } catch {
        throw createError({ statusCode: 400, message: 'Invalid URL' })
    }

    try {
        const response = await fetch(imageUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TCG-Collage/1.0)' }
        })

        if (!response.ok) {
            throw createError({ statusCode: 502, message: `Failed to fetch: ${response.status}` })
        }

        const contentType = response.headers.get('content-type') || 'image/png'
        const arrayBuffer = await response.arrayBuffer()

        setResponseHeaders(event, {
            'Content-Type': contentType,
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=3600'
        })

        return Buffer.from(arrayBuffer)
    } catch (error: any) {
        throw createError({
            statusCode: 502,
            message: error.message || 'Failed to fetch image'
        })
    }
})
