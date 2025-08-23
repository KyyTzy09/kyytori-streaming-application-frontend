"use client";

import { Button } from "@/common/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/shadcn/dropdown-menu";
import { Bookmark, LogOut, Menu, Settings, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import AvatarSkeleton from "../skeletons/avatar-skeleton";
import { User } from "@/common/types/user";
import { FaComment } from "react-icons/fa";
import { useSignOut } from "@/features/auth/hooks/auth-hook";

export default function ProfileDropdown({ user }: { user: User }) {
  const { mutate: signOut } = useSignOut();
  const router = useRouter();
  const items = [
    {
      name: "Profil",
      path: "/dashboard",
      icon: UserIcon,
    },
    {
      name: "Favorit",
      path: "/dashboard/favorite",
      icon: Bookmark,
    },
    {
      name: "Komentar",
      path: "/dashboard/comment",
      icon: FaComment,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user ? (
          <Button className="w-10 h-10 p-0 rounded-full flex items-center justify-center hover:border-red-500 hover:border-2 transition duration-700">
            <img
              src={user?.profile.avatar || "/img/user.jpg"}
              alt="Profile"
              className="rounded-full w-full h-full"
            />
          </Button>
        ) : (
          <AvatarSkeleton />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 md:mr-10 bg-[#252525] border-red-500 text-white font-semibold">
        <DropdownMenuLabel className="w-full flex justify-between items-center">
          <p>Opsi</p>
          <Menu className="w-4 h-4" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-red-500" />
        {items.map((item) => {
          return (
            <DropdownMenuItem
              key={item.name}
              onClick={() => router.push(item.path)}
              className="w-full cursor-pointer focus:bg-red-500 flex items-center justify-start gap-2 transition duration-700"
            >
              <item.icon className="w-5 h-5 text-white" />
              <p className="text-white font-semibold">{item.name}</p>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem
          onClick={() => router.push("/dashboard/setting")}
          className="w-full cursor-pointer focus:bg-red-500 flex md:hidden items-center justify-start gap-2 transition duration-700"
        >
          <Settings className="w-5 h-5 text-white" />
          <p className="text-white font-semibold">Pengaturan</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut()}
          className="w-full cursor-pointer focus:bg-red-500 flex items-center justify-start gap-2 transition duration-700 mt-4 border-white border"
        >
          <LogOut className="w-5 h-5 text-white" />
          <p className="text-white font-semibold">Sign Out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
