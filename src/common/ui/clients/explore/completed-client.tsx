"use client";

import { Button } from "@/common/shadcn/button";
import { Anime } from "@/common/types/anime";
import AnimeCard2 from "@/features/anime/components/cards/anime-card2";
import { useGetCompletedAnime } from "@/features/anime/hooks/anime-hook";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NotFound from "@/app/not-found";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import AnimeHeader from "@/features/anime/components/anime-header";
import BackButton from "../../buttons/back-button";

export default function CompletedAnimeClient() {
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
      <section className="w-full flex items-center justify-between">
        <p className="text-white text-lg md:text-xl font-semibold p-1">
          Anime <span className="text-red-500 font-mono">Completed</span>
        </p>
        <BackButton />
      </section>
      x
      <AnimeCard2 data={completed?.data as Anime[]} isLoading={completedLoad} />
      <section className="w-full flex items-center justify-center gap-3">
        <Button
          className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
          disabled={Number(page) === 1 || Number(page) === 0}
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }), router.push(`/completed`);
          }}
        >
          <ArrowBigLeft className="text-white w-5 h-5" />
          MinPage
        </Button>
        {paginationItems.map((item) => {
          return (
            <Button
              className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
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
          className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
          disabled={
            !Number(completed?.pagination.maxPage) ||
            Number(page) === Number(completed?.pagination.maxPage) ||
            Number(page) > Number(completed?.pagination.maxPage)
          }
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }),
              router.push(`/completed?page=${completed?.pagination.maxPage}`);
          }}
        >
          MaxPage
          <ArrowBigRight className="text-white w-5 h-5" />
        </Button>
      </section>
    </div>
  );
}
