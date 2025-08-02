import { apiClient } from "@/common/helpers/axios"
import { Episodes, Epslink } from "@/common/types/anime"

export const episodeService = {
    async episodes(data: { animeTitle: string }) {
        return await apiClient<{ data: Episodes[] }>({ url: `/episode/${data.animeTitle}` })
    },

    async epsLink(data: { epsTitle: string }) {
        return await apiClient<{ data: Epslink[], pagination: { prevPage: string, nextPage: string } }>({ url: `/eps-link/${data.epsTitle}` })
    }
}