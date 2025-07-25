"use client";

import AnimeCard1 from "@/features/anime/components/cards/anime-card1";
import { motion } from "motion/react";
import React from "react";
import {
  useGetAnimeSchedule,
  useGetCompletedAnime,
  useGetOngoingAnime,
  useGetTopAnime,
} from "@/features/anime/hooks/useGetAnime";
import { Anime, Episodes } from "@/common/types/anime";
import AnimeHeader from "@/features/anime/components/anime-header";
import { Separator } from "@/common/shadcn/separator";
import { convertDay } from "@/common/helpers/day";
import Image from "next/image";
import { defaultImage } from "@/common/constant/image";
import Link from "next/link";
import AnimeCard4 from "@/features/anime/components/cards/anime-card4";

export default function HomePage() {
  const { data: ongoing, isPending: ongoingLoad } = useGetOngoingAnime();
  const { data: completed, isPending: completedLoad } = useGetCompletedAnime();
  const { data: schedule, isPending: scheduleLoad } = useGetAnimeSchedule();
  const { data: topRate, isPending: topRateLoad } = useGetTopAnime();

  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      {/* Carousel */}
      <section className="w-full h-40 md:h-52 bg-gray-600 animate-pulse"></section>
      {/* Jadwal anime hari ini */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 10px rgba(255,0,0,0.5)",
            "0 0 20px rgba(255,0,0,0.9)",
            "0 0 10px rgba(255,0,0,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full rounded-sm flex flex-col gap-2 border border-red-500 p-2 relative overflow-hidden"
      >
        <div className="bg-red-500 h-2 absolute bottom-0 right-0 translate-x-[43.5rem] w-full -rotate-45"></div>
        <div className="bg-red-500 h-2 absolute bottom-0 right-0 translate-x-[45rem] w-full -rotate-45"></div>
        <div className="w-full flex px-1">
          <AnimeHeader
            front="Anime Update Hari Ini"
            back={`(${convertDay(new Date()).name})🔥🔥`}
            url="/schedule"
            linkText="Lihat Jadwal"
          />
        </div>
        <AnimeCard1
          data={schedule?.data[convertDay(new Date()).value] as Anime[]}
          isLoading={scheduleLoad}
        />
      </motion.div>

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
        url="/home"
        linkText="Lihat semua"
      />
      <AnimeCard4 data={topRate?.data as Episodes[]} isLoading={topRateLoad} />
    </div>
  );
}
