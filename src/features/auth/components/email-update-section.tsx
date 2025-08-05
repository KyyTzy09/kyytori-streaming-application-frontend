"use client";

import {
  updateEmailSchema,
  updateEmailType,
} from "@/common/schemas/auth-schema";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { User } from "@/common/types/user";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { authService } from "@/features/auth/services/auth.service";
import { toast } from "react-toastify";
import { useUpdateEmail } from "../hooks/auth-hook";

interface updateEmailSectionProps {
  data: User;
}

export default function UpdateEmailSection({ data }: updateEmailSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateEmailType>({ resolver: zodResolver(updateEmailSchema) });
  const { mutate: updateEmail, isPending: onUpdate } = useUpdateEmail();

  const onSubmit = (data: updateEmailType) => {
    updateEmail(data);
  };

  return (
    <section className="w-full flex flex-col md:grid md:grid-cols-2 items-center justify-start h-full gap-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full h-full bg-gray-50 p-10 pt-5 gap-5 items-center justify-start rounded-md"
      >
        <div className="w-full flex items-center justify-between">
          <p className="flex flex-col text-black font-semibold text-[16px]">
            Perbarui Email !!
            <span className="text-gray-500 text-[12px] md:text-sm">
              Perbarui email anda untuk keamanan
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex flex-col gap-3">
            <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
              Email Lama :
            </Label>
            <Input
              value={data.email}
              disabled
              className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
              Email Baru :
            </Label>
            <Input
              {...register("email")}
              placeholder="Masukan email baru"
              className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full"
            />
            <p className="w-full text-[12px] text-red-500">
              {errors.email?.message}
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
              Password :
            </Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Masukan password anda"
              className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full"
            />
            <p className="w-full text-[12px] text-red-500">
              {errors.password?.message}
            </p>
          </div>
        </div>
        <Button
          disabled={onUpdate}
          type="submit"
          className="flex items-center justify-center w-full bg-red-500 hover:bg-red-400 transition duration-700"
        >
          {onUpdate ? <Loader className="w-5 h-5 animate-spin" /> : "Perbarui"}
        </Button>
      </form>
      <div className="flex flex-col w-full h-full bg-gray-50 p-5 px-10 rounded-md"></div>
    </section>
  );
}
