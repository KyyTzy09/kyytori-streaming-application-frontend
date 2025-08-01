'use client'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CommentService } from "../services/comment-service"
import { toast } from "react-toastify"

export const usePostComment = (data: { epsTitle: string, message: string }) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['post-komentar', data.epsTitle, data.message],
        mutationFn: async () => await CommentService.postCommentByEps(data),
        onSuccess: () => {
            toast.success("Komentar berhasil dikirim", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            queryClient.invalidateQueries({ queryKey: ['komentar', data.epsTitle] })
        },
        onError: () => {
            toast.error("Gagal mengirim komentar", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        },
    })
}

export const useGetCommentByEpisode = (data: { epsTitle: string }) => {
    return useQuery({
        queryKey: ['komentar', data.epsTitle],
        queryFn: async () => await CommentService.getCommentByEps({ epsTitle: data.epsTitle }),
        staleTime: 2 * 60 * 1000
    })
}

export const useGetReplyCommentByParentId = (data: { parentId: string }) => {
    return useQuery({
        queryKey: ['reply-komentar', data.parentId],
        queryFn: async () => await CommentService.getReplyCommentByParentId({ parentId: data.parentId }),
        staleTime: 2 * 60 * 1000
    })
}

export const usePostReplyComment = (data: { message: string, epsTitle: string, parentId: string }) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['post-reply-komentar', data.epsTitle, data.message, data.parentId],
        mutationFn: async () => await CommentService.postReplyCommentByEps(data),
        onSuccess: () => {
            toast.success("Balasan berhasil dikirim" + data.parentId, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            queryClient.invalidateQueries({ queryKey: ['reply-komentar'] })
        },
        onError: () => {
            toast.error("Gagal mengirim balasan", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        },
    })
}