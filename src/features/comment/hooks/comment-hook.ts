'use client'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CommentService } from "../services/comment-service"
import { toast } from "react-toastify"


// Get
export const useGetCommentByEpisode = (data: { epsTitle: string }) => {
    return useQuery({
        queryKey: ['komentar', data.epsTitle],
        queryFn: async () => await CommentService.getCommentByEps({ epsTitle: data.epsTitle }),
    })
}

export const useGetReplyCommentByParentId = (data: { parentId: string, isOpen: boolean }) => {
    return useQuery({
        queryKey: ['reply-komentar', data.parentId],
        queryFn: async () => await CommentService.getReplyCommentByParentId({ parentId: data.parentId }),
        staleTime: 1 * 60 * 1000,
        enabled: data.isOpen && !!data.parentId
    })
}

// Post
export const usePostComment = (data: { epsTitle: string, message: string }) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['post-komentar', data.epsTitle, data.message],
        mutationFn: async () => await CommentService.postCommentByEps(data),
        onSuccess: (response) => {
            toast.success(response?.message || "Komentar berhasil dikirim", {
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
        onError: ({ message }) => {
            toast.error(message || "Gagal mengirim komentar", {
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

export const usePostReplyComment = (data: { message: string, epsTitle: string, parentId: string }) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['post-reply-komentar', data.epsTitle, data.message, data.parentId],
        mutationFn: async () => await CommentService.postReplyCommentByEps(data),
        onSuccess: async (apiData) => {
            toast.success(apiData?.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            queryClient.invalidateQueries({ queryKey: ['komentar', data.epsTitle] })
            queryClient.refetchQueries({ queryKey: ['reply-komentar'], type: "active" })
        },
        onError: ({ message }) => {
            toast.error(message || "Gagal membalas komentar", {
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

// Delete
export const useDeleteComment = (data: { epsTitle: string, commentId: string }) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['delete-komentar', data.epsTitle, data.commentId],
        mutationFn: async () => await CommentService.deleteCommentByEps(data),
        onSuccess: async (response) => {
            toast.success(response?.message || "Berhasil menghapus komentar", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            queryClient.resetQueries({ queryKey: ['komentar', data.epsTitle] })
            queryClient.invalidateQueries({ queryKey: ['reply-komentar'] })
        },
        onError: ({ message }) => {
            toast.error(message || "Gagal menghapus komentar", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    })
}