import { animeService } from "@/features/anime/services/anime-service";
import AnimeCard1 from "@/features/anime/components/cards/anime-card1";
import React from "react";

export default async function Home() {
  const onGoing = await animeService.onGoing();
  return (
    <div className="w-full flex flex-col p-5 items-center gap-5">
      {/* Carousel */}
      <section className="w-full h-52 bg-gray-600 animate-pulse"></section>
      <div className="w-full flex items-center justify-between">
        <p className="text-white font-semibold text-lg md:text-xl">
          Anime{" "}
          <span className="text-red-500">
            <i>On-Going</i>
          </span>
        </p>
      </div>
      {/* Card anime update */}
      <section className="w-full min-h-screen">
        <AnimeCard1 data={onGoing} />
      </section>
    </div>
  );
}
