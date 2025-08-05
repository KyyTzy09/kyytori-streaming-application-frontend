import { toast } from "react-toastify"
import { authService } from "../services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { updateEmailType, updatePasswordType } from "@/common/schemas/auth-schema"
import { useRouter } from "next/navigation"

export const useUpdateEmail = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ["email-patch"],
        mutationFn: async (data: updateEmailType) => await authService.updateUserEmail(data),
        onSuccess: () => {
            toast.success("berhasil memperbarui email", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            router.refresh()
            useSignOut()
        },
        onError: (error) => {
            toast.error(error.message || "Gagal memperbarui email", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    })
}

export const useUpdatePassword = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ["password-patch"],
        mutationFn: async (data: updatePasswordType) => await authService.updatePassword(data),
        onSuccess: (data) => {
            toast.success(data.message || "Berhasil memperbarui password", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            router.refresh()
        },
        onError: (err) => {
            toast.error(err.message || "Gagal memperbarui password", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    })
}

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