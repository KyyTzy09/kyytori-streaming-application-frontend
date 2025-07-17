'use client'

import { signOutSession } from "@/lib/session"
import { toast } from "react-toastify"

export default function useAuth() {
    async function SignOut() {
        try {
            await signOutSession()
            toast("Logout success", {
                type: "success",
                autoClose: 2000,
                position: "top-center"
            })
        } catch (error: any) {
            toast(error.message, {
                type: "error",
                autoClose: 2000,
                position: "top-center"
            })
        }
    }

    return { SignOut }
}