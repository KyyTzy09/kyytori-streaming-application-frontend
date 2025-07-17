import { apiClient } from "@/common/helpers/axios"
import { Anime } from "../../../common/types/anime"

export const animeService = {
    async onGoing(data: { page?: number }) {
        return await apiClient<{ data: Anime[] }>({ url: `/anime/anime-ongoing?page=${data.page || 1}` })
    },

    async topAnime(data: { page?: number }) {
        return await apiClient<{ data: Anime[] }>({ url: `/anime/anime-top?page=${data.page || 1}` })
    },

    async completed(data: { page?: number }) {
        return await apiClient<{ data: Anime[] }>({ url: `/anime/anime-completed?page=${data.page || 1}` })
    },
    
    async detail(data: { animeTitle: string }) {
        return await apiClient<{ data: Anime }>({ url: `/anime/anime-detail/${data.animeTitle}` })
    },
}