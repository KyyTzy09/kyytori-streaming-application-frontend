'use server'

import { NextRequest, NextResponse } from "next/server";
import { Roles } from "./common/enums/role";
import { authService } from "./features/auth/services/auth.service";
import { User } from "./common/types/user";

export default async function Middleware(req: NextRequest) {
    const pathName = req.nextUrl.pathname
    const session = (await authService.getSession())?.data as User

    // Cek apakah sudah login atau belum
    if (pathName === "/signin" && session || pathName === "/signup" && session) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    if (pathName.startsWith("/dashboard/admin") && session.role !== Roles.Admin) {
        return NextResponse.redirect(new URL("/signin", req.url))
    }

    if (pathName.startsWith("/dashboard") && !session) {
        return NextResponse.redirect(new URL("/signin", req.url))
    }

    NextResponse.next()
}