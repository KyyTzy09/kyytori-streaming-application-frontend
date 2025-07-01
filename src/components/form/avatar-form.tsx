"use client";

import React from "react";
import ImageUploader from "../buttons/upload.button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/common/shadcn/alert-dialog";
import { Button } from "@/common/shadcn/button";
import useProfileForm from "@/common/composables/profile-form";
import { Loader } from "lucide-react";

interface AvatarFormProps {
  avatar: string;
  isOpen: boolean;
  isLoading: boolean;
  setIsLoadingAction: (valie: boolean) => void;
  setIsOpenAction: (value: boolean) => void;
}

export default function AvatarForm({
  avatar,
  isOpen,
  isLoading,
  setIsLoadingAction,
  setIsOpenAction,
}: AvatarFormProps) {
  const [image, setImage] = React.useState<File | null>();

  const { UpdateAvatar } = useProfileForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UpdateAvatar({
      file: image as File,
      setIsOpen: setIsOpenAction,
      loading: isLoading,
      setLoading: setIsLoadingAction,
    });
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="w-[200px] p-5">
        <AlertDialogTitle className="text-red-500 font-semibold text-sm">
          Update Avatar (1:1)
        </AlertDialogTitle>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col items-center gap-5"
        >
          <div className="w-40 h-40 flex items-center justify-center">
            <ImageUploader defaultImage={avatar} setImageAction={setImage} />
          </div>
          <div className="w-full flex items-center justify-center gap-2">
            <Button
              onClick={() => setIsOpenAction(false)}
              className="bg-red-500 hover:bg-red-300 transition duration-700 p-4"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-300 transition duration-700 p-4"
            >
              {isLoading ? (
                <Loader className="text-white w-5 h-5 animate-spin" />
              ) : (
                "Upload"
              )}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
