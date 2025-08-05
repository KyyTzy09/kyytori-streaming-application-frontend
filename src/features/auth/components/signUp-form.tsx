"use client";

import useFormHandle from "@/common/composables/auth-form";
import { registerSchema, registerType } from "@/common/schemas/auth-schema";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { authService } from "../services/auth.service";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "../hooks/auth-hook";

export default function SignUpForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const { mutate: onRegisterPost, isPending: onPost } = useSignUp();

  const onSubmit = (data: registerType) => {
    onRegisterPost(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-[400px] bg-white rounded-md p-8 shadow-lg "
    >
      <div className="w-full flex items-center gap-1">
        <h1 className="text-2xl font-semibold">
          Daftar ke{" "}
          <span className="text-xl font-bold text-red-600">KyyTori</span>
        </h1>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <Label htmlFor="firstName" className="self-start">
          Nama Depan
        </Label>
        <Input
          {...register("firstName")}
          name="firstName"
          placeholder="Masukan Nama Depan"
          className="max-w-[350px] h-12"
          required
        />
        {errors.firstName && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {errors.firstName.message}
          </p>
        )}
        <Label htmlFor="lastName" className="self-start">
          Nama Belakang
        </Label>
        <Input
          {...register("lastName")}
          name="lastName"
          placeholder="Masukan Nama Belakang"
          className="max-w-[350px] h-12"
          required
        />
        {errors.lastName && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {errors.lastName.message}
          </p>
        )}
        <Label htmlFor="email" className="self-start">
          Email
        </Label>
        <Input
          {...register("email")}
          name="email"
          placeholder="Masukan Email"
          className="max-w-[350px] h-12"
          required
        />
        {errors.email && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {errors.email.message}
          </p>
        )}
        <Label htmlFor="password" className="self-start">
          Password
        </Label>
        <Input
          {...register("password")}
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Masukan Password"
          className="max-w-[350px] h-12"
          required
        />
        {errors.password && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {errors.password.message}
          </p>
        )}
        <div className="w-full gap-2 items-center flex justify-start">
          <Input
            onChange={() => setShowPassword((prev) => !prev)}
            type="checkbox"
            className="w-3 h-3"
          />
          <Label className="text-[13px]" htmlFor="check">
            Lihat Passsword
          </Label>
        </div>
      </div>
      <Button
        className="w-full bg-red-600 hover:bg-red-400"
        disabled={onPost}
        type="submit"
      >
        {onPost ? <Loader className="animate-spin" size={20} /> : <p>SignUp</p>}
      </Button>
      <div className="text-[13px] text-gray-600 font-semibold flex w-full justify-center gap-1 items-center">
        <p>sudah punya akun?</p>
        <Link href={"/signin"} className="text-[#9e1313] hover:underline">
          Masuk
        </Link>
      </div>
    </form>
  );
}
