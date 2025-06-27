"use client";

import { Button } from "@/common/shadcn/button";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import ProfileDropdown from "../dropdown/profile.dropdown";

export default function AuthButton() {
  const router = useRouter();

  return (
    <section className="flex">
      <div className="w-full flex items-center justify-center gap-2">
        <Button
          className="bg-transparent cursor-pointer border-red-500 border-2 hover:bg-transparent hover:opacity-70 flex items-center justify-between transition duration-700"
          onClick={() => router.push("/auth/signup")}
        >
          <p>SignUp</p>
          <LogIn />
        </Button>
        <Button
          className="bg-red-600 cursor-pointer border-white border-2 text-white hover:bg-red-300 flex items-center justify-between transition duration-700"
          onClick={() => router.push("/auth/signin")}
        >
          <p>SignIn</p>
          <LogIn />
        </Button>
        <ProfileDropdown />
      </div>
    </section>
  );
}
