'use client'

import { signOutSession } from "@/lib/session"
import { toast } from "react-toastify"

export default function useSession() {
    async function SignOut() {
        try {
            await signOutSession()
            toast("Logout success", {
                type: "success",
                autoClose: 2000
            })
        } catch (error: any) {
            toast(error.message, {
                type: "error",
                autoClose: 2000
            })
        }
    }

    return { SignOut }
}