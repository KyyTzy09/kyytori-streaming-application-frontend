"use client";

import { Button } from "@/common/shadcn/button";
import { Anime } from "@/common/types/anime";
import AnimeCard2 from "@/features/anime/components/cards/anime-card2";
import { useGetAnimeList } from "@/features/anime/hooks/anime-hook";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NotFound from "@/app/not-found";

export default function AnimeListView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page");

  const {
    data: Anime,
    isLoading: AnimeLoading,
  } = useGetAnimeList(Number(page));

  const paginationItems = [
    {
      name: "Sebelumnya",
      value: Anime?.pagination.prevPage
        ? ` /list?page=${Anime?.pagination.prevPage}`
        : null,
    },
    {
      name: "Selanjutnya",
      value: Anime?.pagination.nextPage
        ? `/list?page=${Anime?.pagination.nextPage}`
        : null,
    },
  ];

  if (Anime?.data.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      <section className="w-full flex items-center justify-between">
        <p className="text-white text-lg md:text-xl font-semibold p-1">
          Anime-<span className="text-red-500 font-mono">List</span>
        </p>
        <Link
          href={"/home"}
          className="flex text-sm text-white px-2 py-1 items-center justify-center gap-2 bg-red-500 hover:bg-red-400 rounded-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>
      </section>
      <section className="w-full flex items-center justify-between">
        <AnimeCard2 data={Anime?.data as Anime[]} isLoading={AnimeLoading} />
      </section>
      <section className="w-full flex items-center justify-center gap-2 md:gap-5">
        {paginationItems.map((item) => {
          return (
            <Button
              className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700"
              disabled={!item.value}
              key={item.name}
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" }),
                  router.push(item.value!);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </section>
    </div>
  );
}
