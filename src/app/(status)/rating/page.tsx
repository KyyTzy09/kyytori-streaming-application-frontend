"use client";

import AnimeHeader from "@/features/anime/components/anime-header";
import {
  useGetOngoingAnime,
  useGetTopAnime,
} from "@/features/anime/hooks/useGetAnime";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function AnimeTopRatingPage() {
  const router = useRouter();
  const searchParam = useSearchParams();

  const { data: topRateAnime, isPending: topRateAnimeLoad } = useGetTopAnime();

  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      <AnimeHeader
        front="Top"
        back="Rating-Anime"
        url="/home"
        linkText="Kembali"
      />
    
    </div>
  );
}
