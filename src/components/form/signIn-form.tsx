"use client";

import useFormHandle from "@/common/composables/authFormHandle";
import { fetcher } from "@/common/helpers/axios";
import { signInSchema } from "@/common/schemas/auth.schema";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { useSession } from "@/hooks/session";
import { setCookies } from "@/lib/cookies";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

export default function SignInForm() {
  const router = useRouter();
  const { fieldError, handleChange, Loading, handleSubmit } = useFormHandle(
    signInSchema,
    { email: "", password: "" },
    async (objectData) => {
      const { data } = await fetcher.post(`/auth/login`, objectData);
      await setCookies(data.token);
      const session = await useSession();
      toast(`Selamat Datang ${session.profile.userName} !!`, {
        type: "success",
        position: "top-center",
        isLoading: Loading,
        autoClose: 2000,
      });
      router.push("/");
    }
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-[400px] bg-white rounded-md p-8 shadow-lg "
    >
      <div className="w-full flex items-center gap-1">
        <h1 className="text-2xl font-semibold">
          SignIn To{" "}
          <span className="text-xl font-bold text-red-600">KyyTori</span>
        </h1>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <Label htmlFor="email" className="self-start">
          Email
        </Label>
        <Input
          name="email"
          placeholder="Masukan Email"
          onChange={handleChange}
          className="max-w-[350px] h-12"
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
        <div className="flex w-full justify-between items-center">
          <div className="w-1/2 gap-2 items-center flex">
            <Label className="text-[13px]" htmlFor="check">
              Show Passsword
            </Label>
          </div>
          <Link
            className="text-[13px] hover:underline"
            href={"/auth/forgotPassword"}
          >
            Forgot your Password?
          </Link>
        </div>
      </div>
      <Button className="w-full bg-red-600 hover:bg-red-400 " type="submit">
        {Loading ? (
          <Loader className="animate-spin" size={20} />
        ) : (
          <p>SignIn</p>
        )}
      </Button>
      <div className="text-[13px] text-gray-600 font-semibold flex w-full justify-center gap-1 items-center">
        <p>Don't have an account?</p>
        <Link href={"/signup"} className="text-[#9e1313] hover:underline">
          SignUp
        </Link>
      </div>
    </form>
  );
}
