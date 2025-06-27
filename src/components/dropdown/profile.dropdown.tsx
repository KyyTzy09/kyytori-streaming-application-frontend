import { Button } from "@/common/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/shadcn/dropdown-menu";
import { LucideOption, Menu, Option } from "lucide-react";
import React from "react";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-10 h-10 p-0 rounded-full flex items-center justify-center hover:border-red-500 hover:border-2 transition duration-700">
          <img
            src="/img/user.jpg"
            alt="Profile"
            className="rounded-full w-full h-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 md:mr-10 bg-[#252525] border-red-500 text-white font-semibold">
        <DropdownMenuLabel className="w-full flex justify-between items-center">
          <p>Option</p>
          <Menu className="w-4 h-4" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-red-500" />
        <DropdownMenuItem>Tess</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
