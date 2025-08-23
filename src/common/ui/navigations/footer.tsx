"use client";

import { Separator } from "@/common/shadcn/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  const linkItems = [
    {
      href: "https://www.instagram.com/kyyntseph?igsh=MTI5NDN1MDF5bXNtYg%3D%3D",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@razzkyy.98",
      icon: <FaTiktok />,
      label: "TikTok",
    },
    {
      href: "https://github.com/KyyTzy09",
      icon: <FaGithub />,
      label: "GitHub",
    },
  ];
  return (
    <footer
      className={`w-full mt-5 md:mt-10 bg-gradient-to-br from-black via-red-800 to-transparent text-white relative z-20 ${
        pathname.startsWith("/dashboard") && "hidden"
      }`}>
      <div className="flex flex-col w-full p-6 gap-4">
        <div className="md:flex md:justify-between">
          <div className="mb-5 md:mb-2">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold text-red-500">
                KyyTori<span className="text-white">.id</span>
              </span>
            </Link>
          </div>
        </div>
        <Separator className="border-red-500 border" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              KyyTori.id
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 gap-3 sm:justify-center sm:mt-0">
            {linkItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-red-500 text-lg"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
