import { useQuery } from "@tanstack/react-query";
import { animeService } from "../services/anime-service";
import { Anime } from "@/common/types/anime";

export const useGetDetailAnime = (animeTitle: string) => {
    return useQuery({
        queryKey: ["detail", animeTitle],
        queryFn: async () => animeService.detail(animeTitle)
    })
}

export const useGetOngoingAnime = (page?: number) => {
    return useQuery({
        queryKey: ["ongoing"],
        queryFn: async () => await animeService.onGoing({ page }),
        staleTime : 2 * 60 * 1000
    })
}