"use client";

import { defaultImage } from "@/common/constant/image";
import { statusColor } from "@/common/helpers/status";
import { Button } from "@/common/shadcn/button";
import { Episodes } from "@/common/types/anime";
import Card2Skeleton from "@/common/ui/skeleton/card2-skeleton";
import AnimeHeader from "@/features/anime/components/anime-header";
import {
  useGetOngoingAnime,
  useGetTopAnime,
} from "@/features/anime/hooks/useGetAnime";
import TopEpisodeCard from "@/features/episodes/components/episode-top-card";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function AnimeTopRatingPage() {
  const router = useRouter();
  const searchParam = useSearchParams();

  const page = searchParam.get("page");
  const { data: topRateAnime, isPending: topRateAnimeLoad } = useGetTopAnime(
    Number(page)
  );

  const paginationItems = [
    {
      name: "Sebelumnya",
      value: topRateAnime?.pagination.prevPage
        ? ` /rating?page=${topRateAnime?.pagination.prevPage}`
        : null,
    },
    {
      name: "Selanjutnya",
      value: topRateAnime?.pagination.nextPage
        ? `/rating?page=${topRateAnime?.pagination.nextPage}`
        : null,
    },
  ];

  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      <AnimeHeader
        front="Top"
        back="Rating-Anime"
        url="/home"
        linkText="Kembali"
      />
      <TopEpisodeCard
        data={topRateAnime?.data as Episodes[]}
        isLoading={topRateAnimeLoad}
        page={Number(page)}
      />
      <section className="w-full flex items-center justify-center gap-5">
        <Button
          className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
          disabled={!Number(page) || Number(page) === 1}
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }), router.push(`/rating`);
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
            !Number(topRateAnime?.pagination.maxPage) ||
            Number(page) === Number(topRateAnime?.pagination.maxPage) ||
            Number(page) > Number(topRateAnime?.pagination.maxPage)
          }
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }),
              router.push(`/rating?page=${topRateAnime?.pagination.maxPage}`);
          }}
        >
          MaxPage
          <ArrowBigRight className="text-white w-5 h-5" />
        </Button>
      </section>
    </div>
  );
}
