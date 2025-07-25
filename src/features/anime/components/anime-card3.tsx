import { defaultImage } from "@/common/constant/image";
import { Anime } from "@/common/types/anime";
import Card2Skeleton from "@/common/ui/skeleton/card2-skeleton";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AnimeCard3Props {
  data: Anime[];
  isLoading: boolean;
}

export default function AnimeCard3({ data, isLoading }: AnimeCard3Props) {
  if (isLoading) {
    return <Card2Skeleton />;
  }
  return (
      <div className="w-full h-80 flex flex-col overflow-y-auto gap-5">
        {data.length > 0 &&
          data.map(
            (
              {
                id: animeId,
                image,
                genres,
                link,
                status,
                synopsis,
                title,
                type,
              },
              i
            ) => {
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
                >
                  <Link
                    href={`/anime/${link}`}
                    className="flex items-center justify-between w-full h-40 gap-2 p-2 hover:bg-[#232323] transition duration-500"
                  >
                    <div className="w-32 max-w-[25%] h-full relative">
                      <Image
                        className="w-full h-full object-cover"
                        src={image || defaultImage}
                        alt={title}
                        width={450}
                        height={320}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 100 }}
                        transition={{ duration: 0.4 }}
                        className={`${
                          status === "Ongoing"
                            ? "bg-yellow-400"
                            : status === "Completed"
                            ? "bg-green-400"
                            : "bg-red-500"
                        } text-white absolute bottom-0 left-0 text-[8px] md:text-[10px] p-1 rounded-tr-sm font-semibold`}
                      >
                        {status}
                      </motion.div>
                      <div className="absolute top-0 right-0 text-white text-[8px] md:text-[10px] font-semibold p-1 rounded-bl-sm bg-red-500">
                        {type}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[75%] h-40 overflow-hidden gap-2">
                      <p className="font-semibold text-red-500">{title}</p>
                      {synopsis.length > 0 && (
                        <p className="w-full text-white line-clamp-2 text-start text-[10px] md:text-sm break-all">
                          {synopsis[0]["text"]}
                        </p>
                      )}
                      <div className="w-full grid grid-cols-3 gap-2 overflow-y-auto">
                        {genres.length > 0 &&
                          genres.slice(0, 3).map(({ genreName }) => {
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
                  </Link>
                </motion.div>
              );
            }
          )}
      </div>
  );
}
