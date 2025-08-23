'use client'

import { motion } from "motion/react";
import React from "react";
import AnimeHeader from "../anime-header";
import { convertDay } from "@/common/helpers/day";
import AnimeUpdatedCard from "../cards/anime-card-update";
import { scheduleType } from "@/common/types/anime";

interface scheduleAnimeSectionProps {
  data: scheduleType;
  isLoading: boolean;
}

export default function ScheduleAnimeSection({
  data,
  isLoading,
}: scheduleAnimeSectionProps) {
  return (
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
          front="Anime Hari ini"
          back={`(${convertDay(new Date()).name})🔥🔥`}
          url="/schedule"
          linkText="Lihat Jadwal"
        />
      </div>
      <AnimeUpdatedCard
        data={data?.[convertDay(new Date())?.value]}
        isLoading={isLoading}
      />
    </motion.div>
  );
}
