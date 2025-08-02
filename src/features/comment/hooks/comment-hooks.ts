'use client'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CommentService } from "../services/comment-service"
import { toast } from "react-toastify"
import { Comment } from "@/common/types/comment"

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
            queryClient.invalidateQueries({ queryKey: ['komentar', data.epsTitle], exact: true })
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
        staleTime: 0,
    })
}

export const useDeleteComment = (data: { epsTitle: string, commentId: string }) => {
    const queryClient = useQueryClient()
    let responseMessage = ""
    return useMutation({
        mutationKey: ['delete-komentar', data.epsTitle, data.commentId],
        mutationFn: async () => {
            const { message } = await CommentService.deleteCommentByEps(data)
            responseMessage = message
            return message
        },
        onSuccess: () => {
            toast.success(responseMessage, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            queryClient.invalidateQueries({ queryKey: ['komentar', data.epsTitle] })
            queryClient.invalidateQueries({ queryKey: ['reply-komentar'] })
        },
        onError: () => {
            toast.error(responseMessage, {
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

export const useGetReplyCommentByParentId = (data: { parentId: string, isOpen : boolean }) => {
    return useQuery({
        queryKey: ['reply-komentar', data.parentId],
        queryFn: async () => await CommentService.getReplyCommentByParentId({ parentId: data.parentId }),
        staleTime: 0,
        enabled : data.isOpen && !!data.parentId,
    })
}

export const usePostReplyComment = (data: { message: string, epsTitle: string, parentId: string }) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['post-reply-komentar', data.epsTitle, data.message, data.parentId],
        mutationFn: async () => await CommentService.postReplyCommentByEps(data),
        onSuccess: async () => {
            toast.success("Balasan berhasil dikirim", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            queryClient.invalidateQueries({ queryKey: ['reply-komentar']})
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