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

interface ScryfallResponse {
    data: ScryfallCard[]
}

export interface CardResult {
    id: string
    name: string
    imageUrl: string
}

export const useScryfallApi = () => {
    const BASE = 'https://api.scryfall.com/cards'

    const searchCards = async (name: string): Promise<CardResult[]> => {
        const data = await $fetch<ScryfallResponse>(`${BASE}/search`, {
            params: {
                q: name,
                unique: 'cards',
                pageSize: 12
            }
        })

        return data.data
            .filter(card => {
                if (card.image_uris?.large || card.image_uris?.normal) return true
                if (card.card_faces?.[0]?.image_uris?.large || card.card_faces?.[0]?.image_uris?.normal) return true
                return false
            })
            .map(card => {
                const imageUris = card.image_uris || card.card_faces?.[0]?.image_uris
                return {
                    id: card.id,
                    name: card.name,
                    imageUrl: imageUris?.large || imageUris?.normal || imageUris?.png || ''
                }
            })
    }

    return { searchCards }
}