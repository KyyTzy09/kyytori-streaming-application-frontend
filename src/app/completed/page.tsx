"use client";

import { Button } from "@/common/shadcn/button";
import { Anime } from "@/common/types/anime";
import AnimeCard2 from "@/features/anime/components/anime-card2";
import { useGetCompletedAnime } from "@/features/anime/hooks/useGetAnime";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NotFound from "../not-found";

export default function CompletedAnimePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page");
  const { data: completed, isLoading: completedLoad } = useGetCompletedAnime(
    Number(page)
  );

  const paginationItems = [
    {
      name: "Sebelumnya",
      value: completed?.pagination.prevPage
        ? ` /completed?page=${completed?.pagination.prevPage}`
        : null,
    },
    {
      name: "Selanjutnya",
      value: completed?.pagination.nextPage
        ? `/completed?page=${completed?.pagination.nextPage}`
        : null,
    },
  ];
  if (completed?.data.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      <section className="w-full flex flex-col items-center justify-between">
        <p className="text-white text-lg md:text-xl font-semibold p-1 w-full">
          Anime <span className="text-red-500 font-mono">Completed</span>
        </p>
      </section>
      <AnimeCard2 data={completed?.data as Anime[]} isLoading={completedLoad} />
      <section className="w-full flex items-center justify-center gap-5">
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
        <Button
          className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700"
          disabled={Number(page) === Number(completed?.pagination.maxPage)}
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }),
              router.push(`/completed?page=${completed?.pagination.maxPage}`);
          }}
        >
          MaxPage
        </Button>
      </section>
    </div>
  );
}
