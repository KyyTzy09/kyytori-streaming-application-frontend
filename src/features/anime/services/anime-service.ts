import { apiClient } from "@/common/helpers/axios"
import { Anime, Episodes, scheduleType } from "../../../common/types/anime"

interface getPage {
    page?: number
}

export interface pagination {
    prevPage: number
    nextPage: number
    maxPage?: number
}

export const animeService = {
    async onGoing(data: getPage) {
        return await apiClient<{ data: Anime[], pagination: pagination }>({ url: `/anime/anime-ongoing?page=${data.page || 1}` })
    },

    async topAnime(data: getPage) {
        return await apiClient<{ data: Episodes[], pagination : pagination }>({ url: `/anime/anime-top?page=${data.page || 1}` })
    },

    async completed(data: getPage) {
        return await apiClient<{ data: Anime[], pagination: pagination }>({ url: `/anime/anime-completed?page=${data.page || 1}` })
    },

    async listAnime(data: getPage) {
        return await apiClient<{ data: Anime[], pagination: pagination }>({ url: `/anime/anime-list?page=${data.page || 1}` })
    },

    async detail(data: { animeTitle: string }) {
        return await apiClient<{ data: Anime }>({ url: `/anime/anime-detail/${data.animeTitle}` })
    },

    async schedule() {
        return await apiClient<{ data: scheduleType }>({ url: '/anime/anime-schedule' })
    },

    async searchAnime(data: { search: string, page?: number }) {
        return await apiClient<{ data: Anime[], pagination: pagination }>({ url: `/anime/anime-search?search=${data.search}&page=${data.page}` })
    }
}