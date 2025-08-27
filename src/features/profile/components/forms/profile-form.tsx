"use client";

import {
  updateProfileSchema,
  updateProfileType,
} from "@/common/schemas/profile-schema";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useUpdateProfile } from "../../hooks/profile-hook";
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
  const {
    register,
    watch,
    reset,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      name: data.profile.userName,
      info: data.profile.info,
    },
    resolver: zodResolver(updateProfileSchema),
  });

  const {
    mutate: onProfilePatch,
    isPending: onPatch,
    isSuccess: onPatchSuccess,
  } = useUpdateProfile();

  const onSubmit = (data: updateProfileType) => {
    onProfilePatch(data);
    if (onPatchSuccess) {
      setIsOpenAction(false);
    }
  };

  // Data
  const name = watch("name");
  const info = watch("info");

  React.useEffect(() => {
    reset({
      name: data?.profile.userName,
      info: data?.profile.info,
    });
  }, [data, reset]);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-white">
        <AlertDialogTitle className="text-red-600 font-semibold">
          Perbarui Profil
        </AlertDialogTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col items-center justify-between gap-5"
        >
          <div className="w-48 h-48 md:w-40 md:h-40">
            <Image
              src={data.profile.avatar}
              alt={data.profile.userName || "Name"}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-full"
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
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-600 text-[13px] font-semibold self-start">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <Label
                htmlFor="info"
                className="w-full text-red-600 font-semibold text-start"
              >
                Info ({info.length} / 300)
              </Label>
              <Textarea
                {...register("info")}
                maxLength={300}
                id="info"
                className="focus-visible:border-red-500 focus-visible:ring-red-500/70 min-h-32 h-full break-all"
              />
              {errors.info && (
                <p className="text-red-600 text-[13px] font-semibold self-start">
                  {errors.info.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-2">
            <AlertDialogCancel
              type="button"
              onClick={() => {
                setIsOpenAction(false), resetField("name"), resetField("info");
              }}
              className="bg-red-500 hover:bg-red-300 hover:text-white transition duration-700 p-4 text-white"
            >
              Batal
            </AlertDialogCancel>
            <Button
              disabled={
                onPatch ||
                (name === data.profile.userName && info === data.profile.info)
              }
              type="submit"
              className="bg-red-600 hover:bg-red-300 transition duration-700 p-4"
            >
              {onPatch ? (
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
