"use client";

import React from "react";
import { useGetTopAnime } from "../../hooks/anime-hook";
import Image from "next/image";
import ShineEffectWrapper from "@/common/ui/shine-wrapper";
import { motion } from "motion/react";

export default function PopularAnimeMainSection() {
  const { data: topRate, isPending: topRateLoad } = useGetTopAnime();
  return (
    <div className="w-full py-20 bg-black text-white flex flex-col items-center gap-12">
      <h2 className="text-3xl font-bold text-red-500">Anime Populer</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 lg:max-w-6xl w-full p-5">
        {topRate?.data.length as number > 0 && !topRateLoad
          ? topRate?.data?.slice(0, 8).map(({ anime: { image, title } }, i) => (
              <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 100, translateY: 0 }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                key={i}
                className="relative group rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <Image
                  width={300}
                  height={200}
                  src={image}
                  alt="anime"
                  className="w-full h-56 md:h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-center opacity-0 group-hover:opacity-100 transition">
                  <p className="text-sm font-semibold line-clamp-1">{title}</p>
                </div>
              </motion.div>
            ))
          : Array.from({ length: 8 }).map((_, index) => {
              return (
                <ShineEffectWrapper
                  key={index}
                  className="w-full h-64 bg-gray-500"
                ></ShineEffectWrapper>
              );
            })}
      </div>
    </div>
  );
}
