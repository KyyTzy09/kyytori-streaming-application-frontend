"use client";

import { updatePasswordSchema } from "@/common/schemas/auth-schema";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { User } from "@/common/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

interface updatePasswordFormProps {
  data: User;
}

export default function UpdatePasswordForm({ data }: updatePasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
  });
  const [onEdit, setOnEdit] = React.useState<boolean>(false);

  const onSubmit = () => {};

  return (
    <form className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full h-full bg-gray-50 p-10 pt-5 gap-5 items-center justify-start rounded-md relative"
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
          <div className="w-full flex flex-col gap-1">
            <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
              Password Lama :
            </Label>
            <Input
              disabled={!onEdit}
              {...register("lastPassword")}
              type="password"
              placeholder="Masukan password lama anda"
              className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full text-[12px] md:text-sm"
            />
            <p className="w-full text-[12px] text-red-500">
              {errors.lastPassword?.message}
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
              Password Baru :
            </Label>
            <Input
              disabled={!onEdit}
              {...register("newPassword")}
              type="password"
              placeholder="Masukan password baru anda"
              className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full text-[12px] md:text-sm"
            />
            <p className="w-full text-[12px] text-red-500">
              {errors.newPassword?.message}
            </p>
          </div>
        </div>
        <Button
          //   disabled={onUpdate || !onEdit}
          type="submit"
          className="flex items-center justify-center w-full bg-red-500 hover:bg-red-400 transition duration-700"
        >
          {/* {onUpdate ? <Loader className="w-5 h-5 animate-spin" /> : "Perbarui"} */}
          Perbarui Password
        </Button>
      </form>
    </form>
  );
}
