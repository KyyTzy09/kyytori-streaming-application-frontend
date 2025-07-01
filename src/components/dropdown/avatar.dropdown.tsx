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
import AlertModal from "../modals/alert.modal";
import { fetcher } from "@/common/helpers/axios";
import { getCookies } from "@/lib/cookies";
import { defaultImage } from "@/common/constant/image";
import { useRouter } from "next/navigation";
import AvatarForm from "../form/avatar-form";

interface AvatarDropDownProps {
  children: React.ReactNode;
  image: string;
  setPreviewAction: (value: boolean) => void;
}

export default function AvatarDropDown({
  children,
  image,
  setPreviewAction,
}: AvatarDropDownProps) {
  const [isUpload, setIsUpload] = React.useState<boolean>(false); // State untuk menampilkan form update gambar
  const [isDelete, setIsDelete] = React.useState<boolean>(false); // State untuk menampilkan alert dialog
  const [isLoading, setIsLoading] = React.useState<boolean>(false); // State untuk loading form

  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const token = await getCookies();
      await fetcher.delete("/profile/delete-avatar", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.refresh();
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
      setIsDelete(false);
    }
  };
  const items = [
    {
      name: "Lihat Gambar",
      Icon: Eye,
      disabled: image === defaultImage,
      Action: () => setPreviewAction(true),
    },
    {
      name: "Ganti Gambar",
      Icon: Edit,
      disabled: false,
      Action: () => setIsUpload(true),
    },
  ];

  return (
    <>
      {isUpload && (
        <AvatarForm
          avatar={image}
          isOpen={isUpload}
          isLoading={isLoading}
          setIsLoadingAction={setIsLoading}
          setIsOpenAction={setIsUpload}
        />
      )}
      {isDelete && (
        <AlertModal
          title="Apakah anda yakin?"
          description="Tindakan ini tidak dapat dibatalkan"
          isOpen={isDelete}
          isLoading={isLoading}
          setIsOpenAction={setIsDelete}
          alertAction={handleDelete}
        />
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black" align={"start"}>
          <DropdownMenuItem
            disabled={image === defaultImage}
            onClick={() => setIsDelete(true)}
            className="flex items-center justify-start gap-2 focus:bg-red-400 rounded-sm"
          >
            <Trash className="text-white w-4 h-4" />
            <p className="text-white font-semibold">Hapus Gambar</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {items.map((item) => {
            return (
              <DropdownMenuItem
                disabled={item.disabled}
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
