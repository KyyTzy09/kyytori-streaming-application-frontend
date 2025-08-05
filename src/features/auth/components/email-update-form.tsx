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
import { Edit, Loader } from "lucide-react";
import { useUpdateEmail } from "../hooks/auth-hook";

interface updateEmailFormProps {
  data: User;
}

export default function UpdateEmailForm({ data }: updateEmailFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateEmailType>({ resolver: zodResolver(updateEmailSchema) });
  const { mutate: updateEmail, isPending: onUpdate } = useUpdateEmail();
  const [onEdit, setOnEdit] = React.useState<boolean>(false);

  const onSubmit = (data: updateEmailType) => {
    updateEmail(data);
  };

  return (
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
          Perbarui Email
          <span className="text-gray-500 text-[12px] md:text-sm font-semibold">
            Perbarui email anda untuk keamanan
          </span>
        </p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1">
          <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
            Email Lama :
          </Label>
          <Input
            value={data.email}
            disabled
            className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full text-[12px] md:text-sm"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
            Email Baru :
          </Label>
          <Input
            disabled={!onEdit}
            {...register("email")}
            placeholder="Masukan email baru"
            className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full text-[12px] md:text-sm"
          />
          <p className="w-full text-[12px] text-red-500">
            {errors.email?.message}
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
            Password :
          </Label>
          <Input
            disabled={!onEdit}
            {...register("password")}
            type="password"
            placeholder="Masukan password anda"
            className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full text-[12px] md:text-sm"
          />
          <p className="w-full text-[12px] text-red-500">
            {errors.password?.message}
          </p>
        </div>
      </div>
      <Button
        disabled={onUpdate || !onEdit}
        type="submit"
        className="flex items-center justify-center w-full bg-red-500 hover:bg-red-400 transition duration-700"
      >
        {onUpdate ? <Loader className="w-5 h-5 animate-spin" /> : "Perbarui"}
      </Button>
    </form>
  );
}
