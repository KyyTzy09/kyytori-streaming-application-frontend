"use client";
import { Button } from "@/common/shadcn/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          src={"/img/not-found-404.png"}
          alt="404"
          width={300}
          height={300}
          className="w-56 h-56 md:w-80 md:h-80"
        />
        <p className="text-2xl font-semibold text-white">
          Halaman tidak ditemukan
        </p>
        <Button
          className="mt-5 bg-red-600 hover:bg-red-400 items-center flex gap-2 text-white"
          onClick={() => router.push("/home")}
        >
          <ArrowLeft className="w-6 h-6" />
          Kembali ke beranda
        </Button>
      </div>
    </div>
  );
}
