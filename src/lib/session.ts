'use server'

import { fetcher } from "@/common/helpers/axios";
import { User } from "@/common/types/user";
import { deleteCookies, getCookies, setCookies } from "@/lib/cookies";

// Untuk mengambil data profile
export async function getSession() {
    try {
        const token = await getCookies()
        const { data } = await fetcher.get("/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return await data.data
    } catch (error) {
        return;
    }
}

// Untuk logout
export async function signOutSession() {
    await deleteCookies()
}