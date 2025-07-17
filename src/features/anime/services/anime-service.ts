import { apiClient } from "@/common/helpers/axios"
import { Anime } from "../../../common/types/anime"

export const animeService = {
    async onGoing(data: { page?: number }) {
        return await apiClient<{ data: Anime[] }>({ url: `/anime/anime-ongoing?page=${data.page || 1}` })
    },

    async detail(animeTitle: string): Promise<{ data: Anime }> {
        return await apiClient<{ data: Anime }>({ url: `/anime/anime-detail/${animeTitle}` })
    }
}