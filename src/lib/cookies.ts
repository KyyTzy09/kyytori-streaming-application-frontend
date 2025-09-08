'use server'

import { cookies } from "next/headers"

export async function setCookies(token: string) {
    const cookie = cookies()
    const isProduction = process.env.NODE_ENV === "production";
    (await cookie).set("session_token", token, {
        httpOnly: true,
        maxAge: 30* 24 * 60 * 60,
        secure: isProduction ? true : false,
        sameSite: "lax",
        path: "/"
    })
}

export async function getCookies() {
    const cookie = cookies();
    const token = ((await cookie).get("session_token")?.value)
    return token
}

export async function deleteCookies() {
    (await cookies()).delete("session_token")
}