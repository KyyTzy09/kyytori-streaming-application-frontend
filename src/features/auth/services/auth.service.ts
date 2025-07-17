'use server'

import { apiClient } from "@/common/helpers/axios";
import { loginType, registerType } from "@/common/schemas/auth-schema";
import { User } from "@/common/types/user";
import { deleteCookies, getCookies } from "@/lib/cookies";

export const getSessionService = async (token: string) => {
    return await apiClient<{ data: User }>({
        url: "/user/profile", headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const loginService = async (data: loginType) => {
    return await apiClient<{ data: { token: string } }>({ url: "/auth/login", data })
}

export const registerService = async (data: registerType) => {
    return await apiClient<{ data: { message: string } }>({ url: "/auth/login", data })
}
export const outSessionService = async () => {
    await deleteCookies()
}
