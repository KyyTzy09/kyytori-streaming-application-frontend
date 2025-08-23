"use client";

import React from "react";
import AnimeHeader from "../anime-header";
import {
  useGetAnimeByGenre,
  useGetTopGenre,
} from "@/features/genres/hooks/genre-hook";
import { Button } from "@/common/shadcn/button";
import ShineEffectWrapper from "@/common/ui/shine-wrapper";
import AnimeCard5 from "../cards/anime-card5";

export default function GenresAnimeSection() {
  // State
  const [selectedGenre, setSelectedGenre] = React.useState("Reincarnation");

  // Data
  const { data: genres, isPending } = useGetTopGenre();
  const { data: anime, isPending: genreLoad } = useGetAnimeByGenre({
    genre: selectedGenre,
  });

  return (
    <div className="flex flex-col w-full h-full min-h-screen gap-2">
      <section className="flex w-full items-center justify-between">
        <div className="w-full flex flex-col items-start">
          <AnimeHeader
            front="Genre"
            back="Anime"
            url="/gen"
            linkText="Lihat semua"
          />
          <p className="text-gray-300 text-[12px] md:text-sm">
            {selectedGenre}
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col gap-5">
        <div className="w-full grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3">
          {!isPending && genres?.data.length! > 0
            ? genres?.data.map(({ name }) => {
                return (
                  <Button
                    disabled={selectedGenre === name}
                    key={name}
                    onClick={() => setSelectedGenre(name)}
                    className="bg-gradient-to-br px-3 from-red-800 via-red-600 to-rose-400 hover:opacity-70 hover:scale-105 cursor-pointer flex items-center transition duration-700"
                  >
                    <p className="text-[10px] md:text-sm line-clamp-1">{name}</p>
                  </Button>
                );
              })
            : Array.from({ length: 5 }).map((_, index) => {
                return (
                  <ShineEffectWrapper
                    key={index}
                    className="w-full h-10 bg-gray-600 rounded-sm"
                  ></ShineEffectWrapper>
                );
              })}
        </div>
        <div className="flex w-full">
          <AnimeCard5
            data={anime?.data.slice(0, 14) as []}
            isLoading={genreLoad}
          />
        </div>
      </section>
    </div>
  );
}
