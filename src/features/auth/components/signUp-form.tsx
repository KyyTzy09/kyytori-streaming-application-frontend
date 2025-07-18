"use client";

import useFormHandle from "@/common/composables/auth-form";
import { registerSchema } from "@/common/schemas/auth-schema";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { registerService } from "../services/auth.service";

export default function SignUpForm() {
  const router = useRouter();
  const { fieldError, handleChange, Loading, handleSubmit } = useFormHandle(
    registerSchema,
    { email: "", password: "", firstName: "", lastName: "" },
    async (objectData) => {
      const data = await registerService(objectData);
      toast(data.message, {
        type: "success",
        isLoading: Loading,
        autoClose: 2000,
        position: "top-center",
      });
      router.push("/signin");
    }
  );
  return (
    <form
      onSubmit={handleSubmit}
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
          name="firstName"
          placeholder="Masukan Nama Depan"
          onChange={handleChange}
          className="max-w-[350px] h-12"
          required
        />
        {fieldError.firstName && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {fieldError.firstName}
          </p>
        )}
        <Label htmlFor="lastName" className="self-start">
          Nama Belakang
        </Label>
        <Input
          name="lastName"
          placeholder="Masukan Nama Belakang"
          onChange={handleChange}
          className="max-w-[350px] h-12"
          required
        />
        {fieldError.lastName && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {fieldError.lastName}
          </p>
        )}
        <Label htmlFor="email" className="self-start">
          Email
        </Label>
        <Input
          name="email"
          placeholder="Masukan Email"
          onChange={handleChange}
          className="max-w-[350px] h-12"
          required
        />
        {fieldError.email && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {fieldError.email}
          </p>
        )}
        <Label htmlFor="password" className="self-start">
          Password
        </Label>
        <Input
          name="password"
          placeholder="Masukan Password"
          onChange={handleChange}
          className="max-w-[350px] h-12"
          required
        />
        {fieldError.password && (
          <p className="text-red-600 text-[13px] font-semibold self-start">
            {fieldError.password}
          </p>
        )}
      </div>
      <Button
        className="w-full bg-red-600 hover:bg-red-400"
        disabled={Loading}
        type="submit"
      >
        {Loading ? (
          <Loader className="animate-spin" size={20} />
        ) : (
          <p>SignUp</p>
        )}
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
