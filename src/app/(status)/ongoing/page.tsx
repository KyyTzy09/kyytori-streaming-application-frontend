"use client";

import { Button } from "@/common/shadcn/button";
import { Anime } from "@/common/types/anime";
import AnimeCard2 from "@/features/anime/components/anime-card2";
import { useGetOngoingAnime } from "@/features/anime/hooks/useGetAnime";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NotFound from "../../not-found";

export default function OngoingAnimePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page");
  const { data: ongoing, isLoading: onGoingLoad } = useGetOngoingAnime(
    Number(page)
  );

  const paginationItems = [
    {
      name: "Sebelumnya",
      value: ongoing?.pagination.prevPage
        ? ` /ongoing?page=${ongoing?.pagination.prevPage}`
        : null,
    },
    {
      name: "Selanjutnya",
      value: ongoing?.pagination.nextPage
        ? `/ongoing?page=${ongoing?.pagination.nextPage}`
        : null,
    },
  ];
  if (ongoing?.data.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      <section className="w-full flex flex-col items-center justify-between">
        <p className="text-white text-lg md:text-xl font-semibold p-1 w-full">
          Anime <span className="text-red-500 font-mono">On-going</span>
        </p>
      </section>
      <AnimeCard2 data={ongoing?.data as Anime[]} isLoading={onGoingLoad} />
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
          disabled={Number(page) === Number(ongoing?.pagination.maxPage)}
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }),
              router.push(`/ongoing?page=${ongoing?.pagination.maxPage}`);
          }}
        >
          MaxPage
        </Button>
      </section>
    </div>
  );
}
