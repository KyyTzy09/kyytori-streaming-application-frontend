'use client'

import { outSessionService } from "../services/auth.service"
import { toast } from "react-toastify"


export const useSignOut = async () => {
    try {
        await outSessionService()
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