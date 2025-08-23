"use client";

import React from "react";
import AuthButton from "@/features/auth/components/auth-button";
import { User } from "@/common/types/user";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AnimeSearchButton from "@/features/anime/components/anime-search-button";

export default function Navbar({ data }: { data: User }) {
  const pathname = usePathname();
  const menuLinks = [
    { href: "/list", label: "Daftar Anime" },
    { href: "/gen", label: "Daftar Genre" },
  ];

  return (
    <nav
      className={`w-full h-28 md:h-20 border-b ${
        pathname.startsWith("/dashboard") && "hidden"
      }`}
    >
      <div className="w-full h-full flex flex-col md:flex-wrap items-center justify-between md:justify-center p-6 md:p-8">
        <div className="w-full flex items-center justify-between">
          <Link
            href={"/home"}
            className="text-red-500 light:text-black font-bold text-xl"
          >
            KyyTori<span className="text-white">.id</span>
          </Link>
          <div className="flex items-center justify-between gap-5">
            <div className="w-full hidden md:flex gap-5">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white font-semibold hover:text-red-500 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <AnimeSearchButton />
            <AuthButton data={data} />
          </div>
        </div>
        <div className="w-full md:hidden flex items-center justify-start gap-3">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-semibold hover:text-red-500 hover:underline text-[14px] md:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
