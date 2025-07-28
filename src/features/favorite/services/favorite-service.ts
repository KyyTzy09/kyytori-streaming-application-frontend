import { apiClient } from "@/common/helpers/axios"


export const favoriteService = {
    async addFavorite(data: { animeId: string }) {
        return await apiClient({ url: `/favorite/add`, method: 'post', data: { animeId: data.animeId } })
    }

}