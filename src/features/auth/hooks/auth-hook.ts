'use client'

import { toast } from "react-toastify"
import { authService } from "../services/auth.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginType, registerType, updateEmailType, updatePasswordType } from "@/common/schemas/auth-schema"
import { useRouter } from "next/navigation"
import { deleteCookies, setCookies } from "@/lib/cookies"

export const useSignIn = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ["signIn-post"],
        mutationFn: async (data: loginType) => await authService.login(data),
        onSuccess: async (response) => {
            await setCookies(response?.token!);
            const session = (await authService.getSession())?.data;
            toast.success(`Selamat Datang ${session?.profile.userName} !!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            router.push("/home")
        },
        onError: ({ message }) => {
            toast.error(message, {
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

export const useSignUp = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ["signUp-post"],
        mutationFn: async (data: registerType) => await authService.register(data),
        onSuccess: async () => {
            toast.success(`Register Berhasil, Anda Dapat Login Sekarang !!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            router.push("/signin")
        },
        onError: () => {
            toast.error("Register Gagal", {
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

export const useUpdateEmail = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ["email-patch"],
        mutationFn: async (data: updateEmailType) => await authService.updateUserEmail(data),
        onSuccess: async() => {
            toast.success("berhasil memperbarui email", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            await deleteCookies()
            router.refresh()
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
            toast.success(data?.message || "Berhasil memperbarui password", {
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

export const useSignOut = () => {
    const queryClient = useQueryClient()
    const router = useRouter()
    return useMutation({
        mutationKey: ["logout-session"],
        mutationFn: async () => await deleteCookies(),
        onSuccess: () => {
            toast.success("Logout Berhasil", {
                draggable: true,
                autoClose: 2000,
                position: "top-center"
            })
            queryClient.resetQueries({ queryKey: ['profile'], type :"all" })
            router.refresh()
        },
        onError: ({message}) => {
            toast.error(message || "Logout Gagal", {
                draggable: true,
                autoClose: 2000,
                position: "top-center"
            })
        }
    })
}