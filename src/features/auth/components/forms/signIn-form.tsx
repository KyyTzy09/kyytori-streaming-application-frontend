"use client";

import { loginSchema, loginType } from "@/common/schemas/auth-schema";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "../../hooks/auth-hook";

export default function SignInForm() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate: postSignIn, isPending: onPost } = useSignIn();
  const onSubmit = (data: loginType) => {
    postSignIn(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-[400px] bg-white rounded-md p-8 shadow-lg "
    >
      <div className="w-full flex items-center gap-1">
        <h1 className="text-2xl font-semibold">
          Masuk Ke{" "}
          <span className="text-xl font-bold text-red-600">KyyTori</span>
        </h1>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <Label htmlFor="email" className="self-start">
          Email
        </Label>
        <Input
          {...register("email")}
          placeholder="Masukan Email"
          className="max-w-[350px] h-12"
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
        {onPost ? <Loader className="animate-spin" size={20} /> : <p>Masuk</p>}
      </Button>
      <div className="text-[13px] text-gray-600 font-semibold flex w-full justify-center gap-1 items-center">
        <p>Belum punya akun?</p>
        <Link href={"/signup"} className="text-[#9e1313] hover:underline">
          Daftar
        </Link>
      </div>
    </form>
  );
}
