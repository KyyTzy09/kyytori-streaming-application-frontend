"use client";

import { Search } from "lucide-react";
import React from "react";
import AuthButton from "@/features/auth/components/auth-button";
import { User } from "@/common/types/user";
import { usePathname } from "next/navigation";

export default function Navbar({ data }: { data: User }) {
  const pathname = usePathname();
  return (
    <nav className={`w-full h-20 border-b ${pathname.startsWith("/dashboard") && "hidden"}`}>
      <div className="w-full h-full p-8 flex items-center justify-between">
        <p className="text-red-500 light:text-black font-bold text-xl">
          KyyTori<span className="text-white">.id</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <Search className="w-5 h-5 text-white" />
          <AuthButton data={data} />
        </div>
      </div>
    </nav>
  );
}
