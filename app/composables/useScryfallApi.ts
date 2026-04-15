interface ScryfallImageUris {
    png?: string
    normal?: string
    large?: string
}

interface ScryfallCard {
    id: string
    name: string
    image_uris?: ScryfallImageUris
    card_faces?: { image_uris?: ScryfallImageUris }[]
}


export interface CardResult {
    id: string
    name: string
    imageUrl: string
}

export const useScryfallApi = () => {
    const BASE = 'https://api.scryfall.com/cards'

    const searchCards = async (name: string, set?: string): Promise<CardResult[]> => {
        try {
            const params: Record<string, string> = { exact: name }
            if (set) params.set = set.toLowerCase()
            const card = await $fetch<ScryfallCard>(`${BASE}/named`, { params })

            const imageUris = card.image_uris || card.card_faces?.[0]?.image_uris
            if (!imageUris?.large && !imageUris?.normal) return []

            return [{
                id: card.id,
                name: card.name,
                imageUrl: imageUris?.large || imageUris?.normal || imageUris?.png || ''
            }]
        } catch {
            return []
        }
    }

    return { searchCards }
}