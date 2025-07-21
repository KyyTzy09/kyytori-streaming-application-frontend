"use client";

import { Button } from "@/common/shadcn/button";
import { Anime } from "@/common/types/anime";
import AnimeCard2 from "@/features/anime/components/anime-card2";
import { useGetOngoingAnime } from "@/features/anime/hooks/useGetAnime";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NotFound from "../../not-found";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import AnimeHeader from "@/features/anime/components/anime-header";

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
      <AnimeHeader
        front="Anime"
        back="On-going"
        url="/home"
        linkText="Kembali"
      />
      <AnimeCard2 data={ongoing?.data as Anime[]} isLoading={onGoingLoad} />
      <section className="w-full flex items-center justify-center gap-5">
        <Button
          className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
          disabled={Number(page) === 1 || Number(page) === 0}
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }), router.push(`/ongoing`);
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
            Number(page) === Number(ongoing?.pagination.maxPage) ||
            Number(page) > Number(ongoing?.pagination.maxPage)
          }
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }),
              router.push(`/ongoing?page=${ongoing?.pagination.maxPage}`);
          }}
        >
          MaxPage
          <ArrowBigRight className="text-white w-5 h-5" />
        </Button>
      </section>
    </div>
  );
}
