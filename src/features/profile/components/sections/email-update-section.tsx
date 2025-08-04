"use client";

import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { User } from "@/common/types/user";
import React from "react";

interface updateEmailSectionProps {
  data: User;
}

export default function UpdateEmailSection({ data }: updateEmailSectionProps) {
  return (
    <section className="w-full flex flex-col md:grid md:grid-cols-2 items-center justify-start h-full gap-5">
      <form className="flex flex-col w-full h-full bg-gray-50 p-10 pt-5 gap-5 items-center justify-start rounded-md">
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
              value={data.email}
              placeholder="Masukan email baru"
              className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label className="text-red-500 font-semibold text-sm md:text-[15px]">
              Password :
            </Label>
            <Input
              type="password"
              placeholder="Masukan password anda"
              className="border-black focus-visible:ring-0 focus-visible:border-gray-500 w-full"
            />
          </div>
        </div>
        <Button type="submit" disabled className="w-full bg-red-500 hover:bg-red-400 transition duration-700">
          Perbarui
        </Button>
      </form>
      <div className="flex flex-col w-full h-full bg-gray-50 p-5 px-10 rounded-md"></div>
    </section>
  );
}
