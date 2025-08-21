"use client";

import AnimeCard1 from "@/features/anime/components/cards/anime-card1";
import React from "react";
import {
  useGetAnimeSchedule,
  useGetCompletedAnime,
  useGetOngoingAnime,
  useGetTopAnime,
} from "@/features/anime/hooks/anime-hook";
import { Anime, Episodes } from "@/common/types/anime";
import AnimeHeader from "@/features/anime/components/anime-header";
import { Separator } from "@/common/shadcn/separator";
import AnimeCard4 from "@/features/anime/components/cards/anime-card4";
import AnimeCarousel from "@/features/anime/components/anime-carousel";
import ScheduleAnimeSection from "@/features/anime/components/sections/schedule-section";
import GenresAnimeSection from "@/features/anime/components/sections/genre-anime-section";

export default function HomePage() {
  const { data: ongoing, isPending: ongoingLoad } = useGetOngoingAnime();
  const { data: completed, isPending: completedLoad } = useGetCompletedAnime();
  const { data: schedule, isPending: scheduleLoad } = useGetAnimeSchedule();
  const { data: topRate, isPending: topRateLoad } = useGetTopAnime();

  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      {/* Carousel */}
      <section className="w-full h-full">
        <AnimeCarousel data={topRate?.data!} isLoading={topRateLoad} />
      </section>
      {/* Jadwal anime hari ini */}
      <ScheduleAnimeSection data={schedule?.data!} isLoading={scheduleLoad} />
      {/* Anime Ongoing */}
      <AnimeHeader
        front="Anime"
        back="On-going"
        url="/ongoing"
        linkText="Lihat semua"
      />
      <section className="w-full min-h-screen">
        <AnimeCard1 data={ongoing?.data as Anime[]} isLoading={ongoingLoad} />
      </section>
      <Separator className="px-2 border-red-500 border" />
      {/* Anime Completed */}
      <AnimeHeader
        front="Anime"
        back="Completed"
        url="/completed"
        linkText="Lihat semua"
      />
      <section className="w-full min-h-screen">
        <AnimeCard1
          data={completed?.data as Anime[]}
          isLoading={completedLoad}
        />
      </section>
      <Separator className="px-2 border-red-500 border" />
      <AnimeHeader
        front="Top"
        back="Rating-Anime"
        url="/rating"
        linkText="Lihat semua"
      />
      <AnimeCard4 data={topRate?.data as Episodes[]} isLoading={topRateLoad} />
      <Separator className="px-2 border-red-500 border" />
      <GenresAnimeSection />
    </div>
  );
}
