import { apiClient } from "@/common/helpers/axios"
import { Anime, Genres } from "@/common/types/anime"
import { pagination } from "@/features/anime/services/anime-service"

export const genreService = {
    async getAllGenres() {
        return await apiClient<{ data: Genres[] }>({ url: `/genres/get` })
    },

    async getAnimeByGenre(data: { genre: string, page?: number }) {
        return await apiClient<{ data: Anime[], pagination: pagination }>({ url: `/genres/anime-genre?genre=${data.genre}&page=${data.page}` })
    },

    async getTopGenre() {
        return await apiClient<{ data: Genres[] }>({ url: `/genres/get/top-genre` })
    }
}