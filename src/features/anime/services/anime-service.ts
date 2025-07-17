import { fetcher } from "../../../common/helpers/axios"
import { Anime } from "../../../common/types/anime"


export const animeService = {
    async onGoing() {
        const { data } = await fetcher.get(`/anime/anime-ongoing`)
        return data.data as Anime[]
    },
    
    async detail(animeTitle: string) {
        const { data } = await fetcher.get(`/anime/anime-detail/${animeTitle}`)
        return data.data as Anime
    }
}