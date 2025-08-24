"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/common/shadcn/alert-dialog";
import { Button } from "@/common/shadcn/button";
import React from "react";
import { useRouter } from "next/navigation";
import { LogInIcon } from "lucide-react";

interface UnauthorizedModalProps {
  isOpen: boolean;
  setIsOpenAction: (value: boolean) => void;
}

export default function UnauthorizedModal({
  isOpen,
  setIsOpenAction,
}: UnauthorizedModalProps) {
  const router = useRouter();
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className="text-red-600 font-semibold">
          Anda Belum Masuk !!
        </AlertDialogTitle>
        <AlertDialogDescription>
          Anda Perlu Masuk Untuk Mengakses Fitur Ini
        </AlertDialogDescription>
        <div className="mt-5 w-full flex items-center justify-end gap-2">
          <Button
            onClick={() => setIsOpenAction(false)}
            className=" hover:bg-red-400 hover:text-white transition duration-700 bg-transparent text-red-500"
          >
            Batal
          </Button>
          <Button onClick={() => router.push('/signin')} className="bg-red-600 hover:bg-red-300 transition duration-700 px-9 cursor-pointer">
            Masuk
            <LogInIcon/>
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
