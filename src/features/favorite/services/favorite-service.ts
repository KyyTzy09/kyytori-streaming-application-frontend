import { apiClient } from "@/common/helpers/axios"
import { queryByAnimeId } from "../hooks/useFavorite"


export const favoriteService = {
    async getFavoriteAnime(data: queryByAnimeId) {
        return await apiClient<{ message: string }>({ url: `/favorite/get`, data: { animeId: data.animeId } })
    },

    async addFavorite(data: queryByAnimeId) {
        return await apiClient<{ message: string }>({ url: `/favorite/add`, method: 'post', data })
    },

    async deleteFavorite(data: queryByAnimeId) {
        return await apiClient<{ message: string }>({ url: `/favorite/delete`, method: 'delete', data })
    }
}