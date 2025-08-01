import { apiClient } from "@/common/helpers/axios"
import { Comment } from "@/common/types/comment"
import { getCookies } from "@/lib/cookies"

export const CommentService = {
    async getCommentByEps(data: { epsTitle: string }) {
        return await apiClient<{ data: Comment[] }>({
            url: `/comment/get/${data.epsTitle}`
        })
    },
    async postCommentByEps(data: { epsTitle: string, message: string }) {
        const token = await getCookies()
        return await apiClient<{ message: string }>({
            url: `/comment/add`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                epsTitle: data.epsTitle,
                message: data.message
            },
            method: 'post'
        })
    },
    async deleteCommentByEps(data: { epsTitle: string, commentId: string }) {
        const token = await getCookies()
        return await apiClient<{ message: string }>({
            url: `/comment/delete`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data,
            method: 'delete'
        })
    },
    async postReplyCommentByEps(data: { message: string, epsTitle: string, parentId: string }) {
        const token = await getCookies()
        return await apiClient<{ message: string }>({
            url: `/comment/reply`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data,
            method: 'post'
        })
    },
    async getReplyCommentByParentId(data: { parentId: string }) {
        return await apiClient<{ data: Comment[] }>({
            url: `/comment/reply/${data.parentId}`
        })
    }
}