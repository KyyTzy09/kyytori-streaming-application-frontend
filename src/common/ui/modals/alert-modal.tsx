"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/common/shadcn/alert-dialog";
import { Button } from "@/common/shadcn/button";
import { Loader } from "lucide-react";
import React from "react";

interface alertModalProps {
  isOpen: boolean;
  isLoading: boolean;
  setIsOpenAction: (value: boolean) => void;
  alertAction: () => void;
  title: string;
  description: string;
}

export default function AlertModal({
  isOpen,
  isLoading,
  setIsOpenAction,
  alertAction,
  title,
  description,
}: alertModalProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className="text-red-600 font-semibold">
          {title}
        </AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <div className="w-full flex items-center justify-end gap-2">
          <Button
            onClick={() => setIsOpenAction(false)}
            className="bg-red-500 hover:bg-red-300 transition duration-700"
          >
            Batal
          </Button>
          <Button
            onClick={alertAction}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-300 transition duration-700"
          >
            {isLoading ? (
              <Loader className="text-white w-5 h-5 animate-spin" />
            ) : (
              "Lanjutkan"
            )}
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
