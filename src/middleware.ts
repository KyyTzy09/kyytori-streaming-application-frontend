'use server'

import { NextRequest, NextResponse } from "next/server";
import { Roles } from "./common/constant/role";
import { getSession } from "./lib/session";

export default async function Middleware(req: NextRequest) {
    const pathName = req.nextUrl.pathname
    const session = await getSession()

    // Cek apakah sudah login atau belum

    if (pathName.startsWith("/dashboard/admin") && session.role !== Roles.Admin) {
        return NextResponse.redirect(new URL("/signin", req.url))
    }

    if (pathName.startsWith("/dashboard") && !session) {
        return NextResponse.redirect(new URL("/signin", req.url))
    }

    NextResponse.next()
}