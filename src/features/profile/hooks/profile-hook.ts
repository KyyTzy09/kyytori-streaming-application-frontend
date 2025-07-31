'use client'

import { useQuery } from "@tanstack/react-query"
import { profileService } from "../services/profile-service"

export const usegetProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: async () => await profileService.getProfile(),
        staleTime: 1000 * 60 * 5,
    })
}