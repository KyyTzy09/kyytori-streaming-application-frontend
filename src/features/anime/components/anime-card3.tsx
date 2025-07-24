import { defaultImage } from "@/common/constant/image";
import { Anime } from "@/common/types/anime";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AnimeCard3Props {
  data: Anime[];
  isLoading: boolean;
}

export default function AnimeCard3({ data, isLoading }: AnimeCard3Props) {
  return (
    <div className="w-full h-80 flex flex-col overflow-y-auto gap-5">
      {data.length > 0 &&
        data.map(
          ({
            id: animeId,
            image,
            genres,
            link,
            status,
            synopsis,
            title,
            type,
          }) => {
            return (
              <motion.div>
                <Link
                  href={`/anime/${link}`}
                  key={animeId}
                  className="flex items-center justify-between w-full h-40 gap-2 p-2"
                >
                  <div className="w-32 max-w-[25%] h-full">
                    <Image
                      className="w-full h-full object-cover"
                      src={image || defaultImage}
                      alt={title}
                      width={450}
                      height={320}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[75%] h-full overflow-hidden gap-2">
                    <p className="font-semibold text-red-500">{title}</p>
                    {synopsis.length > 0 && (
                      <p className="w-full text-white line-clamp-2 text-start text-[10px] md:text-sm break-all">
                        {synopsis[0]["text"]}
                      </p>
                    )}
                    <div className="w-full grid grid-cols-3 gap-2 overflow-y-auto">
                      {genres.length > 0 &&
                        genres.slice(0, 4).map(({ genreName }) => {
                          return (
                            <Link
                              key={genreName}
                              href={`/gen/${genreName}`}
                              className="flex text-white items-center line-clamp-1 text-center justify-center text-[10px] md:text-[12px] py-1 px-2 font-semibold bg-transparent rounded-sm border border-red-500 hover:bg-red-500 hover:text-white transition duration-700"
                            >
                              {genreName}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          }
        )}
    </div>
  );
}
