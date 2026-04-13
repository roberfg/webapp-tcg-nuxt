interface PokemonTcgCard {
    id: string
    name: string
    images: {
        small: string
        large: string
    }
}

interface PokemonTcgSet {
    id: string
}

interface PokemonTcgResponse<T> {
    data: T[]
}

const STORAGE_KEY = 'ptcg_set_id_cache'

const loadStoredSetCache = (): Map<string, string> => {
    if (typeof localStorage === 'undefined') return new Map()
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? new Map(JSON.parse(raw)) : new Map()
    } catch {
        return new Map()
    }
}

const setIdCache = loadStoredSetCache()

const persistSetCache = () => {
    if (typeof localStorage === 'undefined') return
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...setIdCache]))
    } catch {}
}

export const usePokemonTcgApi = () => {
    const BASE = 'https://api.pokemontcg.io/v2'

    const getSetIdByPtcgoCode = async (ptcgoCode: string): Promise<string | null> => {
        if (setIdCache.has(ptcgoCode)) {
            return setIdCache.get(ptcgoCode)!
        }

        try {
            const data = await $fetch<PokemonTcgResponse<PokemonTcgSet>>(`${BASE}/sets`, {
                params: {
                    q: `ptcgoCode:${ptcgoCode}`,
                    pageSize: 1
                }
            })

            if (data.data && data.data.length > 0) {
                const setId = data.data[0].id
                setIdCache.set(ptcgoCode, setId)
                persistSetCache()
                return setId
            }
        } catch (e) {
            console.error(`Error fetching set ID for ${ptcgoCode}:`, e)
            throw e
        }

        return null
    }

    const searchCards = async (name: string, ptcgoCode?: string, number?: string): Promise<CardResult[]> => {
        const quotedName = `"${name}"`
        let query = `name:${quotedName}`

        if (ptcgoCode && number) {
            const setId = await getSetIdByPtcgoCode(ptcgoCode)
            if (setId) {
                query = `name:${quotedName} set.id:${setId} number:${number}`
            } else {
                query = `name:${quotedName} number:${number}`
            }
        }

        const data = await $fetch<PokemonTcgResponse<PokemonTcgCard>>(`${BASE}/cards`, {
            params: {
                q: query,
                pageSize: 12
            }
        })

        const toResults = (cards: PokemonTcgCard[]): CardResult[] => {
            const results = cards.map(card => ({
                id: card.id,
                name: card.name,
                imageUrl: card.images.large ?? card.images.small
            }))
            const exactMatch = results.find(c => c.name.toLowerCase() === name.toLowerCase())
            return exactMatch ? [exactMatch, ...results.filter(c => c !== exactMatch)] : results
        }

        if (data.data.length > 0) {
            return toResults(data.data)
        }

        if (ptcgoCode && number) {
            const fallbackData = await $fetch<PokemonTcgResponse<PokemonTcgCard>>(`${BASE}/cards`, {
                params: {
                    q: `name:${quotedName} number:${number}`,
                    pageSize: 12
                }
            })
            return toResults(fallbackData.data)
        }

        return []
    }

    const warmSetCache = async (ptcgoCodes: string[]): Promise<void> => {
        const unique = [...new Set(ptcgoCodes.filter(Boolean))]
        await Promise.all(unique.map(code => getSetIdByPtcgoCode(code).catch(() => null)))
    }

    return { searchCards, warmSetCache }
}