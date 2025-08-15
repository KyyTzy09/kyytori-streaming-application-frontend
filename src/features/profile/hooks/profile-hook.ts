'use client'

import { useMutation, useQuery } from "@tanstack/react-query"
import { profileService } from "../services/profile-service"
import { updateProfileType } from "@/common/schemas/profile-schema"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export const usegetProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: async () => await profileService.getProfile(),
        staleTime: 1000 * 60 * 1,
    })
}

export const useUpdateProfile = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ['profile-patch'],
        mutationFn: async (data: updateProfileType) => await profileService.updateProfile(data),
        onSuccess: () => {
            toast.success("Update Profile Berhasil", {
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
        onError: () => {
            toast.error("Update Profile Gagal", {
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

export const useGetSomeoneProfile = (data: { userId: string }) => {
    return useQuery({
        queryKey: ['profile-someone', data.userId],
        queryFn: async () => await profileService.getSomeoneProfile(data),
        staleTime : 2 * 60 * 1000
    })
}
