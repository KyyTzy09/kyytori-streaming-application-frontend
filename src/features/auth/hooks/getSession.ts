import { getCookies } from "@/lib/cookies"
import { getSessionService } from "../services/auth.service"

export const getSession = async () => {
    try {
        const token = await getCookies()
        const { data } = await getSessionService(token!)
        return data
    } catch (error) {
        return
    }
}