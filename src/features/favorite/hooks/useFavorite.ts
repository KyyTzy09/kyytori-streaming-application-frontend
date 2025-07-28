import { useMutation, useQuery } from "@tanstack/react-query"
import { favoriteService } from "../services/favorite-service"

export interface queryByAnimeId {
    animeId: string
}

export const useGetFavorite = (data: queryByAnimeId) => {
    return useQuery({
        queryKey: ['get-favorite', data.animeId]
    })
}

export const usePostFavorite = (data: queryByAnimeId) => {
    return useMutation({
        mutationKey: ['post-favorite', data.animeId],
        mutationFn: async () => favoriteService.addFavorite({ animeId: data.animeId })
    })
}

export const useDeleteFavorite = (data: queryByAnimeId) => {
    return useMutation({
        mutationKey: ['delete-favorite', data.animeId],
        mutationFn: async () => favoriteService.deleteFavorite({ animeId: data.animeId })
    })
}