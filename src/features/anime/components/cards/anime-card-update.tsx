import { motion } from "motion/react";
import { Card, CardContent } from "@/common/shadcn/card";
import { Anime } from "@/common/types/anime";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { statusColor } from "@/common/helpers/status";
import CountDownTime from "@/common/ui/countdown-time";
import { Timer } from "lucide-react";
import Card3Skeleton from "../skeleton/anime-skeleton-card3";

interface AnimeCard1Props {
  data: Anime[];
  isLoading: boolean;
}

export default function AnimeUpdatedCard({ data, isLoading }: AnimeCard1Props) {
  return (
    <>
      {data?.length! > 0 ? (
        <div className="w-full gap-1 lg:gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {data?.map(
            (
              {
                id,
                title,
                image,
                link,
                synopsis,
                updatedStatus,
                status,
                updatedEps,
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
                    <Card className="group bg-transparent p-0 rounded border-none relative">
                      <div className="absolute p-3 w-full z-10 rounded-sm scale-95 opacity-0 flex items-center justify-center gap-2 group-hover:opacity-100 group-hover:scale-100 bg-black/65 top-0 bottom-0 transition duration-500">
                        <div className="w-full flex flex-col">
                          <p className="text-white font-semibold text-[13px] md:text-[16px] line-clamp-2 text-center">
                            {title}
                          </p>
                          {synopsis?.length > 0 && (
                            <p className="text-white line-clamp-3 text-center text-[10px] md:text-sm">
                              {synopsis[0]["text"]}
                            </p>
                          )}
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
                          <div className="absolute gap-1 flex items-center justify-between left-1 bottom-1 bg-black/80 py-[1px] px-1 xl:px-2 rounded-sm">
                            <Timer className="w-[9px] h-[9px] md:w-3 md:h-3 lg:w-4 lg:h-4 text-red-500" />
                            <CountDownTime realeaseTimeStamp={updatedStatus} />
                          </div>
                          {updatedEps && (
                            <div className="text-white group-hover:bg-red-400 absolute bottom-1 right-1 px-1 rounded-[4px] bg-red-500 text-[8px] sm:text-[10px] md:text-[12px] lg:text-sm font-semibold flex items-center justify-center transition duration-700">
                              {updatedEps}
                            </div>
                          )}
                          <div
                            className={`${statusColor(
                              status
                            )} group-hover:text-red-500 group-hover:bg-white absolute top-0 left-0 p-1 rounded-br-sm text-[10px] md:text-sm font-semibold text-white flex items-center justify-center transition duration-700`}
                          >
                            {status}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            }
          )}
        </div>
      ) : isLoading ? (
        <Card3Skeleton />
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src={"/img/not-found-404.png"}
            alt="404"
            width={300}
            height={300}
            className="w-32 h-32 md:w-52 md:h-52"
          />
          <p className="text-white font-semibold text-sm md:text-lg">
            Belum ada anime yang dijadwalkan
          </p>
        </div>
      )}
    </>
  );
}
