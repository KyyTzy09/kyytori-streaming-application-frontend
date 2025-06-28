import { Roles } from "../constant/role"

export type User = {
    id: string
    email: string
    role: Roles
    profile: Profile
}

export type Profile = {
    userId: string
    userName: string
    info: string
    avatar: string
}