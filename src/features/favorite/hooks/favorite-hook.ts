"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { favoriteService } from "../services/favorite-service"
import { toast } from "react-toastify"

export interface queryByAnimeId {
    animeId: string
}

export const useGetUserFavorites = () => {
    return useQuery({
        queryKey: ['get-userFavorite'],
        queryFn: async () => await favoriteService.getUserFavorites(),
        staleTime: 2 * 60 * 1000,
        retry : 1
    })
}

export const useGetFavorite = (data: queryByAnimeId) => {
    return useQuery({
        queryKey: ['get-favorite', data.animeId],
        queryFn: async () => favoriteService.getFavoriteAnime({ animeId: data.animeId }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetOtherPersonFavorites = (data: { userId: string }) => {
    return useQuery({
        queryKey: ['get-othersFavorites', data.userId],
        queryFn: async () => favoriteService.getOtherPerson(data),
        staleTime : 2 * 60 * 1000
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
            queryClient.invalidateQueries({ queryKey: ["get-userFavorite"] })
            queryClient.refetchQueries({ queryKey: ["get-favorite", data.animeId], type: "active" })
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
            queryClient.invalidateQueries({ queryKey: ["get-userFavorite"] })
            queryClient.setQueriesData({ queryKey: ['get-favorite', data.animeId], type: "all" }, { data: null })
            queryClient.refetchQueries({ queryKey: ["get-favorite", data.animeId], type: "all" })
        },
        onError: () => {
            toast.error(`Gagal Menghapus Dari Favorit`, {
                position: "top-right",
                autoClose: 3000
            })
        }
    })
}