import { apiClient } from "@/common/helpers/axios";
import { User } from "@/common/types/user";
import { getCookies } from "@/lib/cookies";

export const profileService = {
    async getProfile() {
        const token = await getCookies();
        return await apiClient<{ data: User }>({ url: '/user/profile', headers: { Authorization: `Bearer ${token}` } });
    }
}