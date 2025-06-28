'use server'

import { NextRequest, NextResponse } from "next/server";
import { Roles } from "./common/constant/role";
import { useSession } from "./hooks/session";

export default async function Middleware(req: NextRequest, res: NextResponse) {
    const pathName = req.nextUrl.pathname
    const session = await useSession()

    // Cek apakah sudah login atau belum
    if (!session) {
        return NextResponse.redirect("/signIn")
    }

    if (pathName.startsWith("/dashboard/admin") && session.role !== Roles.Admin) {
        return NextResponse.redirect("/signin")
    }
    
    if (pathName.startsWith("/dashboard") && !session) {
        return NextResponse.redirect("/signin")
    }

}