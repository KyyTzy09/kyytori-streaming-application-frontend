import { apiClient } from "@/common/helpers/axios";
import { loginType, registerType } from "@/common/schemas/auth-schema";
import { User } from "@/common/types/user";
import { deleteCookies, getCookies } from "@/lib/cookies";

export const authService = {
    async login(data: loginType) {
        return await apiClient<{ token: string }>({ url: "/auth/login", data, method: "post" })
    },

    async register(data: registerType) {
        return await apiClient<{ message: string }>({ url: "/auth/register", data, method: "post" })
    },

    async getSession() {
        const token = await getCookies()
        return await apiClient<{ data: User }>({
            url: "/user/profile", headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    async updateUserEmail(data: { email: string, password: string }) {
        const token = await getCookies()
        return await apiClient<{ message: string, data: User }>({ url: `/auth/email/patch`, method: "patch", data, headers: { Authorization: `Bearer ${token}` } })
    },

    async clearSession() {
        return await deleteCookies()
    }
}

