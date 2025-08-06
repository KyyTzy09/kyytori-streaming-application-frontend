import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

export const apiClient = async <T>(config: AxiosRequestConfig): Promise<T> => {
    const { data } = await axiosInstance(config)
    return data
}