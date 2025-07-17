import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email tidak valid").min(1, "Karakter wajib diisi"),
    password: z.string().min(6, "Minimal password 6 karakter")
})

export type loginType = z.infer<typeof loginSchema>

export const registerSchema = z.object({
    firstName: z.string().min(3, "Karakter wajib diisi"),
    lastName: z.string().min(1, "Karakter wajib diisi"),
    email: z.string().email("Email tidak valid").min(1, "Karakter wajib diisi"),
    password: z.string().min(6, "Minimal password 6 karakter"),
})

export type registerType = z.infer<typeof registerSchema>