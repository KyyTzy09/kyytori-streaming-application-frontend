"use client";

import { Button } from "@/common/shadcn/button";
import NavigationHeader from "@/common/ui/headers/header";
import { useGetAllGenres } from "@/features/genres/hooks/useGetGenres";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function GenresPage() {
  const router = useRouter();

  const { data: genres } = useGetAllGenres();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-5">
      <NavigationHeader
        title="Genre Anime"
        description="Cari anime berdasarkan genre yang anda klik"
        Icon={ArrowLeft}
        action={handleBack}
        actionText="Kembali"
      />
      <section className="w-full flex flex-col">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {genres?.data.length! > 0 &&
            genres?.data.map((gen) => {
              return (
                <Button
                  onClick={() => router.push(`/gen/${gen.name}`)}
                  className="w-full rounded-sm cursor-pointer flex items-center justify-between p-2 bg-transparent border-2 border-red-500 font-semibold text-white  hover:border-white hover:text-red-500 hover:scale-105 transition duration-700"
                >
                  <p className="text-[12px] md:text-sm">{gen.name}</p>
                  <p className="text-[12px] md:text-sm">{gen.count}</p>
                </Button>
              );
            })}
        </div>
      </section>
    </div>
  );
}
