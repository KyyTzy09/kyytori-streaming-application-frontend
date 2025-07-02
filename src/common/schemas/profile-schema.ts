import { z } from "zod";

export const updateProfileSchema = z.object({
    name: z.string().min(2, "Karakter wajib diisi"),
    info: z.string().min(1 , "Karakter wajib diisi")
})

export type updateProfileType = z.infer<typeof updateProfileSchema>