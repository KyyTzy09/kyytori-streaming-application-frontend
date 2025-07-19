'use server'

import { apiClient } from "@/common/helpers/axios";
import { loginType, registerType } from "@/common/schemas/auth-schema";
import { User } from "@/common/types/user";
import { deleteCookies } from "@/lib/cookies";

export const getSessionService = async (token: string) => {
    return await apiClient<{ data: User }>({
        url: "/user/profile", headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const loginService = async (data: loginType) => {
    try {
        return await apiClient<{ token: string }>({ url: "/auth/login", data, method: "post" })
    } catch (error) {
        throw error
    }
}

export const registerService = async (data: registerType) => {
    return await apiClient<{ message: string }>({ url: "/auth/register", data, method: "post" })
}

export const outSessionService = async () => {
    await deleteCookies()
}
