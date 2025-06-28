import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email("Email tidak valid").min(1, "Karakter wajib diisi"),
    password: z.string().min(6, "Minimal password 6 karakter")
})

export const signUpSchema = z.object({
    firstName: z.string().min(3, "Karakter wajib diisi"),
    lastName: z.string().min(1, "Karakter wajib diisi"),
    email: z.string().email("Email tidak valid").min(1, "Karakter wajib diisi"),
    password: z.string().min(6, "Minimal password 6 karakter"),
})