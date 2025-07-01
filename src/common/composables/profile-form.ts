'use client'

import { getCookies } from "@/lib/cookies";
import { fetcher } from "../helpers/axios";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function useProfileForm() {
    const router = useRouter()
    async function UpdateAvatar(data: { file: File, setIsOpen: (value: boolean) => void, loading: boolean, setLoading: (value: boolean) => void }) {
        data.setLoading(true);
        try {
            const formData = new FormData();
            formData.append("image", data.file);
            const token = await getCookies();
            await fetcher.patch("/profile/update-avatar", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast("Update Avatar Berhasil", {
                autoClose: 2000,
                isLoading: data.loading,
                type: "success",
                position: "top-center"
            })
            router.refresh()
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data.message
                toast(message, {
                    type: "error",
                    isLoading: data.loading,
                    autoClose: 2000,
                    position: "top-center"
                })
            }
        } finally {
            data.setLoading(false)
            data.setIsOpen(false)
        }
    }

    return { UpdateAvatar }
}