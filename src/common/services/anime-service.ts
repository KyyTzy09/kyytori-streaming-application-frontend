import { fetcher } from "../helpers/axios"
import { Anime } from "../types/anime"


export const animeService = {
    async onGoing() {
        const { data } = await fetcher.get(`/anime/anime-ongoing`)
        return data.data as Anime[]
    }
}