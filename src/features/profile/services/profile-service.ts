import { apiClient } from "@/common/helpers/axios";
import { updateProfileType } from "@/common/schemas/profile-schema";
import { User } from "@/common/types/user";
import { getCookies } from "@/lib/cookies";

export const profileService = {
    async getProfile() {
        const token = await getCookies();
        return await apiClient<{ data: User }>({ url: '/user/profile', headers: { Authorization: `Bearer ${token}` } });
    },

    async updateProfile(data: updateProfileType) {
        const token = await getCookies()
        if (!token) {
            return
        }
        return await apiClient<{ message: string }>({
            url: "/profile/update-info", data, method: "patch", headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    async getSomeoneProfile(data: { userId: string }) {
        return await apiClient<{ data: User }>({ url : `/user/profile/${data.userId}` })
    }
}