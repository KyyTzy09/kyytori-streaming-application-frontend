"use client";

import { Button } from "@/common/shadcn/button";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter()
    return (
    <Button
      className="flex items-center justify-center bg-red-500 hover:bg-red-300 text-white fill-white font-semibold transition duration-700"
      onClick={() => router.back()}
    >
      Kembali
      <ArrowBigLeft />
    </Button>
  );
}
