'use server'

import { fetcher } from "@/common/helpers/axios";
import { getCookies } from "@/lib/cookies";

export async function useSession() {
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