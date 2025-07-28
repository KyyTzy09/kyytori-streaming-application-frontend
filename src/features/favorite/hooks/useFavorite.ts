"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { favoriteService } from "../services/favorite-service"
import { toast } from "react-toastify"

export interface queryByAnimeId {
    animeId: string
}

export const useGetFavorite = (data: queryByAnimeId) => {
    return useQuery({
        queryKey: ['get-favorite', data.animeId],
        queryFn: async () => favoriteService.getFavoriteAnime({ animeId: data.animeId })
    })
}

export const usePostFavorite = (data: queryByAnimeId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['post-favorite', data.animeId],
        mutationFn: async () => await favoriteService.addFavorite({ animeId: data.animeId }),
        onSuccess: () => {
            toast.success(`Berhasil Menambahkan Ke Favorit`, {
                position: "top-right",
                autoClose: 3000
            })
            queryClient.invalidateQueries({ queryKey: ["get-favorite", data.animeId], exact: true })
        },
        onError: () => {
            toast.error(`Gagal Menambahkan Ke favorit`, {
                position: "top-right",
                autoClose: 3000
            })
        }
    })
}

export const useDeleteFavorite = (data: queryByAnimeId) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['delete-favorite', data.animeId],
        mutationFn: async () => await favoriteService.deleteFavorite({ animeId: data.animeId }),
        onSuccess: () => {
            toast.success(`Berhasil Menghapus Dari Favorit`, {
                position: "top-right",
                autoClose: 3000
            })
            queryClient.setQueryData(['get-favorite', data.animeId], { data: null })

            queryClient.invalidateQueries({ queryKey: ["get-favorite", data.animeId] })
        },
        onError: () => {
            toast.error(`Gagal Menghapus Dari Favorit`, {
                position: "top-right",
                autoClose: 3000
            })
        }
    })
}