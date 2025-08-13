'use server'

import axios from "axios"
import { getCookies } from "./cookies"
import { User } from "@/common/types/user"

export const checkSession = async () => {
    try {
        const token = await getCookies()
        if (!token) {
            return
        }
        return await axios.get<{ data: User }>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error) {
        return
    }
}