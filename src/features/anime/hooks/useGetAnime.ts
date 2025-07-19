import { useQuery } from "@tanstack/react-query";
import { animeService } from "../services/anime-service";
import { Anime } from "@/common/types/anime";

export const useGetDetailAnime = (animeTitle: string) => {
    return useQuery({
        queryKey: ["detail", animeTitle],
        queryFn: async () => animeService.detail({ animeTitle })
    })
}

export const useGetOngoingAnime = (page?: number) => {
    return useQuery({
        queryKey: ["ongoing"],
        queryFn: async () => await animeService.onGoing({ page }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetCompletedAnime = (page?: number) => {
    return useQuery({
        queryKey: ["top"],
        queryFn: async () => await animeService.completed({ page }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetTopAnime = (page?: number) => {
    return useQuery({
        queryKey: ["completed"],
        queryFn: async () => await animeService.topAnime({ page }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetEpsLink = (epsTitle: string) => {
    return useQuery({
        queryKey: ["epslink", epsTitle],
        queryFn: async () => await animeService.epsLink({ epsTitle }),
        staleTime: 2 * 60 * 1000
    })
}