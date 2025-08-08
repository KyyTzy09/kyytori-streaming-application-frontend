import { defaultImage } from "@/common/constant/image";
import { Anime } from "@/common/types/anime";
import { FavoritesAnime } from "@/common/types/favorite";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AnimeFavoriteCardProps {
  data: FavoritesAnime[];
}

export default function AnimeFavoriteCard({ data }: AnimeFavoriteCardProps) {
  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {data?.length > 0 &&
        data?.map(
          (
            {
              user,
              anime: {
                id: animeId,
                image: animeCover,
                title: animeTitle,
                link,
                status,
                rating,
                type,
              },
            },
            index
          ) => {
            return (
              <Link
                href={`/anime/${link}`}
                key={index}
                className="group w-full h-auto items-center justify-between flex flex-col bg-[#232323] overflow-hidden rounded-sm relative"
              >
                <div className="absolute top-0 right-0 bg-red-500 text-sm px-2 rounded-bl-sm z-20 text-white font-mono">
                  <p className="">{type}</p>
                </div>
                <div className="w-full h-52 sm:h-64 p-1">
                  <Image
                    src={animeCover || defaultImage}
                    alt={animeTitle}
                    width={320}
                    height={400}
                    className="w-full h-full object-cover rounded-sm group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="w-full h-12 p-1 bg-[#232323] overflow-hidden z-20">
                  <p className="text-white font-semibold text-center text-sm line-clamp-2">
                    {animeTitle}
                  </p>
                </div>
              </Link>
            );
          }
        )}
    </div>
  );
}
