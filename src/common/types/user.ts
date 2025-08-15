import { Roles } from "../enums/role"

export type User = {
    id: string
    email: string
    role: Roles
    profile: Profile
    createdAt: Date
    updatedAt: Date
}

export type Profile = {
    userId: string
    userName: string
    info: string
    avatar: string
    createdAt: Date
    updatedAt: Date
}