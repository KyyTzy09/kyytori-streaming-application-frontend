'use client'

import { useQuery } from "@tanstack/react-query"
import { CommentService } from "../services/comment-service"

export const useGetCommentByEpisode = (data: { epsTitle: string }) => {
    return useQuery({
        queryKey: ['komentar', data.epsTitle],
        queryFn: async () => CommentService.getCommentByEps({ epsTitle: data.epsTitle })
    })
}