"use client";

import AnimeCard1 from "@/features/anime/components/anime-card1";
import React from "react";
import {
  useGetCompletedAnime,
  useGetOngoingAnime,
  useGetTopAnime,
} from "@/features/anime/hooks/useGetAnime";
import { Anime } from "@/common/types/anime";
import AnimeHeader from "@/features/anime/components/anime-header";

export default function Home() {
  const { data: ongoing, isPending: ongoingLoad } = useGetOngoingAnime();
  const { data: completed, isPending: completedLoad } = useGetCompletedAnime();

  return (
    <div className="w-full flex flex-col p-5 items-center gap-5">
      {/* Carousel */}
      <section className="w-full h-52 bg-gray-600 animate-pulse"></section>
      <AnimeHeader
        front="Anime"
        back="On-going"
        url="/anime/ongoing"
        linkText="Lihat semua"
      />
      {/* Card anime update */}
      <section className="w-full min-h-screen">
        <AnimeCard1 data={ongoing?.data as Anime[]} isLoading={ongoingLoad} />
      </section>
      <AnimeHeader
        front="Anime"
        back="Completed"
        url="/anime/top"
        linkText="Lihat semua"
      />
      <section className="w-full min-h-screen">
        <AnimeCard1
          data={completed?.data as Anime[]}
          isLoading={completedLoad}
        />
      </section>
    </div>
  );
}
