import { apiClient } from "@/common/helpers/axios"
import { queryByAnimeId } from "../hooks/favorite-hook"
import { FavoritesAnime } from "@/common/types/favorite"
import { getCookies } from "@/lib/cookies"


export const favoriteService = {
    async getUserFavorites() {
        const token = await getCookies()
        return await apiClient<{ message: string, data: FavoritesAnime[] }>({ url: `/favorite/user/get`, headers: { Authorization: `Bearer ${token}` } })
    },

    async getFavoriteAnime(data: queryByAnimeId) {
        const token = await getCookies()
        return await apiClient<{ message: string, data: FavoritesAnime }>({ url: `/favorite/get/${data.animeId}`, headers: { Authorization: `Bearer ${token}` } })
    },

    async addFavorite(data: queryByAnimeId) {
        const token = await getCookies()
        return await apiClient<{ message: string, data: FavoritesAnime }>({ url: `/favorite/add`, method: 'post', data, headers: { Authorization: `Bearer ${token}` } })
    },

    async deleteFavorite(data: queryByAnimeId) {
        const token = await getCookies()
        return await apiClient<{ message: string, data: FavoritesAnime }>({ url: `/favorite/delete`, method: 'delete', data, headers: { Authorization: `Bearer ${token}` } })
    }
}