"use client";

import useProfileForm from "@/common/composables/profile-form";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/common/shadcn/alert-dialog";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { Textarea } from "@/common/shadcn/textarea";
import { User } from "@/common/types/user";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProfileFormProps {
  data: User;
  isOpen: boolean;
  setIsOpenAction: (value: boolean) => void;
}

export default function ProfileForm({
  isOpen,
  setIsOpenAction,
  data,
}: ProfileFormProps) {
  const [name, setName] = React.useState<string>(data.profile.userName || "");
  const [info, setInfo] = React.useState<string>(data.profile.info || "");

  const { isLoading, fieldError, UpdateProfile, updateProfileChange } =
    useProfileForm();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileChange({ value: e.target.value, setValue: setName });
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateProfileChange({ value: e.target.value, setValue: setInfo });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UpdateProfile({ name, info, setIsOpen: setIsOpenAction });
  };

  React.useEffect(() => {
    if (isOpen) {
      setName(data.profile.userName || "");
      setInfo(data.profile.info || "");
    }
  }, [isOpen, data.profile.userName, data.profile.info]);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-white">
        <AlertDialogTitle className="text-red-600 font-semibold">
          Update Profile
        </AlertDialogTitle>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col items-center justify-between gap-5"
        >
          <div className="w-48 h-48 md:w-40 md:h-40">
            <Image
              src={data.profile.avatar}
              alt={data.profile.userName || "Name"}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <Label
                htmlFor="name"
                className="w-full text-red-500 font-semibold text-start"
              >
                Nama
              </Label>
              <Input
                id="name"
                className="focus-visible:border-red-600 focus-visible:ring-red-600/70"
                value={name}
                onChange={handleNameChange}
              />
              {fieldError.name && (
                <p className="text-red-600 text-[13px] font-semibold self-start">
                  {fieldError.name}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <Label
                htmlFor="info"
                className="w-full text-red-600 font-semibold text-start"
              >
                Info
              </Label>
              <Textarea
                id="info"
                className="focus-visible:border-red-500 focus-visible:ring-red-500/70 h-32"
                value={info}
                onChange={handleInfoChange}
              />
              {fieldError.info && (
                <p className="text-red-600 text-[13px] font-semibold self-start">
                  {fieldError.info}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-2">
            <AlertDialogCancel
              type="button"
              onClick={() => setIsOpenAction(false)}
              className="bg-red-500 hover:bg-red-300 hover:text-white transition duration-700 p-4 text-white"
            >
              Batal
            </AlertDialogCancel>
            <Button
              disabled={
                isLoading ||
                (name === data.profile.userName && info === data.profile.info)
              }
              type="submit"
              className="bg-red-600 hover:bg-red-300 transition duration-700 p-4"
            >
              {isLoading ? (
                <Loader className="text-white w-5 h-5 animate-spin" />
              ) : (
                "Simpan"
              )}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
