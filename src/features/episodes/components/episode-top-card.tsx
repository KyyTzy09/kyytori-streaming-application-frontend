import { defaultImage } from "@/common/constant/image";
import { Episodes } from "@/common/types/anime";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopEpisodeSkeleton from "./episode-top-skeleton";

interface TopEpisodeCardProps {
  data: Episodes[];
  isLoading: boolean;
  page: number;
}

export default function TopEpisodeCard({
  data,
  isLoading,
  page,
}: TopEpisodeCardProps) {
  if (isLoading) {
    return <TopEpisodeSkeleton />;
  }
  return (
    <div className="w-full flex flex-col items-center justify-between">
      {data?.length! > 0 &&
        data?.map(({ title, animeId, rating, anime }, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateX: -100 }}
              animate={{ opacity: 100, translateX: 0 }}
              exit={{ opacity: 0, translateX: -100 }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              key={title}
              className="w-full"
            >
              <Link
                href={`/anime/${anime.link}/episode/${title}`}
                className="w-full flex items-center justify-between h-40 md:h-60 gap-2 p-2 hover:bg-[#232323] transition duration-500"
              >
                <div className="w-32 md:w-40 max-w-[25%] h-full relative">
                  <Image
                    className="w-full h-full object-cover"
                    src={anime?.image || defaultImage}
                    alt={title}
                    width={450}
                    height={320}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    transition={{ duration: 0.4 }}
                    className={`text-white bg-yellow-500 absolute bottom-0 left-0 text-[8px] md:text-[10px] p-1 rounded-tr-sm font-semibold`}
                  >
                    {isNaN(anime?.episode)
                      ? anime.episode
                      : `Episode ${anime.episode}`}
                  </motion.div>
                  <div className="absolute top-0 right-0 text-white text-[8px] md:text-[10px] font-semibold p-1 rounded-bl-sm bg-red-500">
                    {anime.type}
                  </div>
                  <div className="absolute top-0 left-0 text-white text-[8px] md:text-[10px] font-semibold py-1 px-3 rounded-br-sm bg-blue-500">
                    #{page ? i * Number(page) + 1 : i + 1}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[75%] h-40 md:h-60 overflow-hidden gap-2">
                  <p className="font-semibold text-red-500 text-sm md:text-lg">
                    {title}
                  </p>
                  {anime?.synopsis?.length > 0 && (
                    <p className="w-full text-white line-clamp-2 text-start text-[10px] md:text-sm break-all">
                      {anime?.synopsis[0]["text"]}
                    </p>
                  )}
                  <div className="w-full grid grid-cols-3 gap-2 overflow-y-auto">
                    {anime?.genres?.length > 0 &&
                      anime?.genres.slice(0, 3).map(({ genreName }) => {
                        return (
                          <div
                            key={genreName}
                            className="flex h-8 text-white items-center line-clamp-1 text-center justify-center text-[8px] md:text-[10px] py-1 px-2 font-semibold bg-transparent rounded-sm border border-red-500 hover:bg-red-500 hover:text-white transition duration-700"
                          >
                            {genreName}
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <div className="flex flex-col w-full h-10 md:w-16 md:h-16 bg-red-500 items-center rounded-md p-1">
                    <p className="items-start font-semibold text-white text-[10px] md:text-[12px]">
                      Rating
                    </p>
                    <p className="text-white font-semibold text-[10px] md:text-sm">
                      {rating}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
    </div>
  );
}
