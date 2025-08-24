import { motion } from "motion/react";
import { Card, CardContent } from "@/common/shadcn/card";
import { Anime } from "@/common/types/anime";
import CardSkeleton from "../skeleton/anime-skeleton-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { statusColor } from "@/common/helpers/status";

interface AnimeCard1Props {
  data: Anime[];
  isLoading: boolean;
}

export default function AnimeCard1({ data, isLoading }: AnimeCard1Props) {
  if (isLoading) {
    return <CardSkeleton />;
  }
  return (
    <div className="w-full gap-1 lg:gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {data
        ?.map(
          (
            {
              id,
              title,
              titleJap,
              titleEng,
              image,
              link,
              synopsis,
              genres,
              status,
            },
            i
          ) => {
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 100, translateY: 0 }}
                exit={{ opacity: 0, translateY: 100 }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              >
                <Link href={`/anime/${link}`}>
                  <Card
                    key={id}
                    className="group bg-transparent p-0 rounded border-none relative"
                  >
                    <div className="absolute p-2 md:p-4 z-10 rounded-sm translate-y-10 opacity-0 flex flex-col justify-between gap-2 w-full group-hover:opacity-100 group-hover:translate-y-0 bg-black/90 top-0 bottom-0 transition duration-700">
                      <div className="w-full flex flex-col gap-2">
                        <p className="text-red-500 font-semibold text-[13px] md:text-[16px] line-clamp-2 md:line-clamp-none text-center">
                          {title}
                        </p>
                        {synopsis?.length > 0 && (
                          <p className="text-white line-clamp-3 text-start text-[10px] md:text-sm">
                            {synopsis[0]["text"]}
                          </p>
                        )}
                      </div>
                      <div className="w-full grid grid-cols-2 gap-2">
                        {genres?.length > 0 &&
                          genres
                            .map((gen) => {
                              return (
                                <p
                                  key={gen.genreName}
                                  className="text-white flex items-center line-clamp-1 text-center justify-center text-[7px] md:text-[9px] p-1 font-semibold bg-red-500 rounded-sm"
                                >
                                  {gen.genreName || ""}
                                </p>
                              );
                            })
                            .slice(0, 4)}
                      </div>
                    </div>
                    <CardContent className="w-full flex flex-col p-1 xl:p-2">
                      <div className="w-full h-36 sm:h-52 md:h-56 lg:h-60 overflow-hidden relative">
                        <Image
                          src={image}
                          alt={title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div
                          className={`${statusColor(
                            status
                          )} group-hover:text-red-500 group-hover:bg-white absolute top-0 left-0 p-1 rounded-br-sm text-[10px] md:text-sm font-semibold text-white flex items-center justify-center transition duration-700`}
                        >
                          {status}
                        </div>
                      </div>
                      <p className="text-white line-clamp-1">{title}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          }
        )
        .slice(0, 15)}
    </div>
  );
}
