import axios, { AxiosRequestConfig, isAxiosError } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

export const apiClient = async <T>(config: AxiosRequestConfig): Promise<T | undefined> => {
    try {
        const { data } = await axiosInstance(config)
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            throw new Error(err.response?.data?.message || 'Request failed')
        }
        throw err
    }
}