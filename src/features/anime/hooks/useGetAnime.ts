import { useQuery } from "@tanstack/react-query";
import { animeService } from "../services/anime-service";

export const useGetDetailAnime = (animeTitle: string) => {
    return useQuery({
        queryKey: ["detail", animeTitle],
        queryFn: async () => await animeService.detail({ animeTitle }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetOngoingAnime = (page?: number) => {
    return useQuery({
        queryKey: ["ongoing", page],
        queryFn: async () => await animeService.onGoing({ page }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetCompletedAnime = (page?: number) => {
    return useQuery({
        queryKey: ["completed", page],
        queryFn: async () => await animeService.completed({ page }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetTopAnime = (page?: number) => {
    return useQuery({
        queryKey: ["top", page],
        queryFn: async () => await animeService.topAnime({ page }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetAnimeSchedule = () => {
    return useQuery({
        queryKey: ["schedule"],
        queryFn: async () => await animeService.schedule(),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetAnimeList = (page?: number) => {
    return useQuery({
        queryKey: ["animeList", page],
        queryFn: async () => await animeService.listAnime({ page }),
        staleTime: 2 * 60 * 1000
    })
}
