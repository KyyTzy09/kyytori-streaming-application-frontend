import { toast } from "react-toastify"
import { authService } from "../services/auth.service"

export const useSignOut = async () => {
    await authService.clearSession()
    try {
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