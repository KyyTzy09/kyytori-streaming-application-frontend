import { apiClient } from "@/common/helpers/axios"
import { getCookies } from "@/lib/cookies"

export const CommentService = {
    async getCommentByEps(data: { epsTitle: string }) {
        return apiClient<{ data: Comment[] }>({
            url: `/comment/get/${data.epsTitle}`
        })
    },
    async postCommentByEps(data: { epsTitle: string, message: string }) {
        const token = await getCookies()
        return apiClient<{ message: string }>({
            url: `/comment/add`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data,
            method: 'post'
        })
    },
    async deleteCommentByEps(data: { epsTitle: string, commentId: string }) {
        const token = await getCookies()
        return apiClient<{ message: string }>({
            url: `/comment/delete`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data,
            method: 'delete'
        })
    },
}