'use client'

import { useMutation, useQuery } from "@tanstack/react-query"
import { CommentService } from "../services/comment-service"

export const usePostCommentByEpisode = (data: { epsTitle: string }) => {
    return useMutation({
        mutationKey: ['komentar',]
    })
}

export const useGetCommentByEpisode = (data: { epsTitle: string }) => {
    return useQuery({
        queryKey: ['komentar', data.epsTitle],
        queryFn: async () => await CommentService.getCommentByEps({ epsTitle: data.epsTitle }),
        staleTime: 2 * 60 * 1000
    })
}