"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/shadcn/dropdown-menu";
import { Edit, Eye, Trash } from "lucide-react";
import React from "react";

interface AvatarDropDownProps {
  children: React.ReactNode;
  setPreviewAction: (value: boolean) => void;
}

export default function AvatarDropDown({
  children,
  setPreviewAction
}: AvatarDropDownProps) {
  const [preview, setIsPreview] = React.useState<boolean>(false); // State untuk preview gambar
  const [isUpload, setIsUpload] = React.useState<boolean>(false); // State untuk menampilkan form update gambar

  const items = [
    {
      name: "Lihat Gambar",
      Icon: Eye,
      Action: () => setPreviewAction(true),
    },
    {
      name: "Ganti Gambar",
      Icon: Edit,
      Action: () => setIsUpload(true),
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black">
          <DropdownMenuItem className="flex items-center justify-start gap-2 focus:bg-red-400 rounded-sm">
            <Trash className="text-white w-4 h-4" />
            <p className="text-white font-semibold">Hapus Gambar</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="" />
          {items.map((item) => {
            return (
              <DropdownMenuItem
                onClick={item.Action}
                key={item.name}
                className="flex items-center justify-start gap-2 focus:bg-red-400"
              >
                <item.Icon className="text-white w-4 h-4" />
                <p className="text-white font-semibold">{item.name}</p>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
