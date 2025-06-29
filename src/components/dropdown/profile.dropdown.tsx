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
import { Bookmark, Command, LogOut, Menu, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import AvatarSkeleton from "../skeleton/avatar.skeleton";
import useSession from "@/hooks/session";
import { User } from "@/common/types/user";


export default function ProfileDropdown({ user } : { user : User}) {
  const {SignOut} = useSession()

  const router = useRouter();
  const items = [
    {
      name: "Profile",
      path: "/dashboard",
      icon: UserIcon,
    },
    {
      name: "Favorite",
      path: "/dashboard/favorite",
      icon: Bookmark,
    },
    {
      name: "Comment",
      path: "/dashboard/comment",
      icon: Command,
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
          <p>Option</p>
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
          onClick={async() => await SignOut() }
          className="w-full cursor-pointer focus:bg-red-500 flex items-center justify-start gap-2 transition duration-700 mt-4 border-white border"
        >
          <LogOut className="w-5 h-5 text-white" />
          <p className="text-white font-semibold">Sign Out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
