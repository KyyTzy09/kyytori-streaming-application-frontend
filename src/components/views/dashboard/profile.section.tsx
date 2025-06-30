"use client";

import { Button } from "@/common/shadcn/button";
import { User } from "@/common/types/user";
import { Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProfileSectionProps {
  data: User;
}

export default function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <section className="w-full h-full bg-gray-50 p-5 rounded-md relative">
      <Settings className="w-5 h-5 md:w-6 md:h-6 hover:text-red-500 cursor-pointer absolute top-2 right-2 transition duration-700" />
      <div className="w-ful h-full flex items-center gap-5 md:gap-10 ">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full">
          <Image
            src={data.profile.avatar}
            alt={data.profile.userName || "Name"}
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-start justify-start max-w-[80%] h-32 md:h-40 pt-4">
          <p className="text-red-500 text-lg font-bold">
            {data.profile.userName}
          </p>
          <p className="text-gray-500 text-sm font-semibold">
            {data.profile.info}
          </p>
        </div>
      </div>
    </section>
  );
}
