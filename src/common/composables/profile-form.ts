'use client'

import { getCookies } from "@/lib/cookies";
import { apiClient } from "../helpers/axios";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { updateProfileSchema, updateProfileType } from "../schemas/profile-schema";
import { z } from "zod";


export default function useProfileForm() {
    const router = useRouter()
    const [fieldError, setFieldError] = React.useState<Partial<Record<keyof updateProfileType, string>>>({})
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function UpdateProfile(data: { name: string, info: string, setIsOpen: (value: boolean) => void }) {
        setIsLoading(true)
        try {
            updateProfileSchema.parse({ name: data.name, info: data.info })
            const token = await getCookies()
            await apiClient({
                url: "/profile/update-info", method: "patch", data: {
                    name: data.name,
                    info: data.info
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast("Update Profile Berhasil", {
                autoClose: 2000,
                isLoading: isLoading,
                type: "success",
                position: "top-center"
            })
            data.setIsOpen(false)
            router.refresh()
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: Record<string, string> = {}
                error.errors.forEach((err) => {
                    if (err.path.length > 0) {
                        errors[err.path[0]] = err.message
                    }
                })
                setFieldError(errors)
            }
            else if (axios.isAxiosError(error)) {
                const message = error.response?.data.message
                toast(message, {
                    type: "error",
                    isLoading: isLoading,
                    autoClose: 2000,
                    position: "top-center"
                })
            }
        } finally {
            setIsLoading(false)
        }
    }

    // Untuk handle change di
    async function updateProfileChange(data: { value: string, setValue: (value: string) => void }) {
        if (data.value.length <= 300) {
            data.setValue(data.value)
        } else {
            return
        }
    }

    async function UpdateAvatar(data: { file: File, setIsOpen: (value: boolean) => void }) {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("image", data.file);
            const token = await getCookies();
            await apiClient({
                url: "/profile/update-avatar", data: formData, method: "patch", headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast("Update Avatar Berhasil", {
                autoClose: 2000,
                isLoading: isLoading,
                type: "success",
                position: "top-center"
            })
            setFieldError({})
            router.refresh()
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data.message
                toast(message, {
                    type: "error",
                    isLoading: isLoading,
                    autoClose: 2000,
                    position: "top-center"
                })
            }
        } finally {
            setIsLoading(false)
            data.setIsOpen(false)
        }
    }

    async function DeleteAvatar(data: { setIsDelete: (value: boolean) => void }) {
        setIsLoading(true);
        try {
            const token = await getCookies();
            await apiClient({ url: "/profile/delete-avatar", headers: { Authorization: `Bearer ${token}` } })
            router.refresh();
        } catch (error) {
            return;
        } finally {
            setIsLoading(false);
            data.setIsDelete(false);
        }
    }

    return { fieldError, isLoading, UpdateProfile, updateProfileChange, UpdateAvatar, DeleteAvatar }
}