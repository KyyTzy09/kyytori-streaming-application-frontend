import { useQuery } from "@tanstack/react-query"
import { genreService } from "../services/genre-service"

export const useGetAllGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: async () => await genreService.getAllGenres(),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetAnimeByGenre = (data: { genre: string, page?: number }) => {
    return useQuery({
        queryKey: ["anime-genre", data.genre, data.page],
        queryFn: async () => genreService.getAnimeByGenre({ genre: data.genre, page: data.page }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetTopGenre = () => {
    return useQuery({
        queryKey: ["top-genre"],
        queryFn: async () => await genreService.getTopGenre(),
        staleTime: 2 * 60 * 1000
    })
}