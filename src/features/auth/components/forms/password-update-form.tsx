"use client";

import {
  updatePasswordSchema,
  updatePasswordType,
} from "@/common/schemas/auth-schema";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { User } from "@/common/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Loader } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useUpdatePassword } from "../../hooks/auth-hook"; 

interface updatePasswordFormProps {
  data: User;
}

export default function UpdatePasswordForm({ data }: updatePasswordFormProps) {
  // Submit
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: { newPassword: "", lastPassword: "" },
    resolver: zodResolver(updatePasswordSchema),
  });
  const { mutate: updatePassword, isPending: onUpdate } = useUpdatePassword();

  // State
  const [showPassword, setShowPassword] = React.useState<number[]>([]);
  const [onEdit, setOnEdit] = React.useState<boolean>(false);

  const findPasswordIndex = (index: number) => {
    return showPassword?.includes(index);
  };

  // Handle Event
  const handleShowPassword = (index: number) => {
    setShowPassword((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];

      if (safePrev?.includes(index)) {
        return prev?.filter((i) => i !== index);
      } else {
        return [...safePrev, index];
      }
    });
  };

  const onSubmit = (data: updatePasswordType) => {
    updatePassword(data);
    if (isSubmitted) {
      setShowPassword([])
      setOnEdit(false);
    }
  };

  const inputItems = [
    {
      label: "Password lama",
      key: "lastPassword",
      message: errors.lastPassword?.message,
    },
    {
      label: "Password baru",
      key: "newPassword",
      message: errors.newPassword?.message,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full bg-gray-50 p-10 pt-5 gap-5 items-center justify-between rounded-md relative"
    >
      <Edit
        onClick={() => setOnEdit((prev) => !prev)}
        className={`${
          onEdit ? "text-red-500" : "text-black"
        } w-4 h-4 md:w-5 md:h-5 hover:text-red-500 cursor-pointer absolute top-2 right-2 transition duration-700`}
      />
      <div className="w-full flex items-center justify-between">
        <p className="flex flex-col text-red-500 font-bold text-[16px] md:text-[20px]">
          Perbarui Password
          <span className="text-gray-500 text-[12px] md:text-sm font-semibold">
            Ingat password anda, jangan sampai lupa!!
          </span>
        </p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1">
          <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
            Email Anda :
          </Label>
          <Input
            value={data.email}
            disabled
            className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full text-[12px] md:text-sm"
          />
        </div>
        {inputItems.map(({ key, label, message }, index) => {
          return (
            <div key={key} className="w-full flex flex-col gap-1">
              <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
                {label} :
              </Label>
              <Input
                disabled={!onEdit}
                {...register(
                  key === "newPassword" ? "newPassword" : "lastPassword"
                )}
                type={findPasswordIndex(index) ? "text" : "password"}
                placeholder={`Masukan ${label} anda`}
                className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full text-[12px] md:text-sm"
              />
              {message && (
                <p className="w-full text-[12px] text-red-500">{message}</p>
              )}
              <div className="w-full gap-2 items-center flex justify-start">
                <Input
                  disabled={!onEdit}
                  onChange={() => handleShowPassword(index)}
                  type="checkbox"
                  className="w-3 h-3"
                />
                <Label
                  className={`${
                    onEdit ? "text-black" : "text-gray-400"
                  }  text-[13px]`}
                  htmlFor="check"
                >
                  Lihat Passsword
                </Label>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        disabled={onUpdate || !onEdit}
        type="submit"
        className="flex items-center justify-center w-full bg-red-500 hover:bg-red-400 transition duration-700"
      >
        {onUpdate ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          "Perbarui Password"
        )}
      </Button>
    </form>
  );
}
