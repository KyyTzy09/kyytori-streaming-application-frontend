import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    validateStatus: (status) => {
        return status <= 401 && status !== 400;
    }
})

export const apiClient = async <T>(config: AxiosRequestConfig): Promise<T> => {
    const { data } = await axiosInstance(config)
    return data
}