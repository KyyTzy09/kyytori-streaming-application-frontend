import { motion } from "motion/react";
import { Card, CardContent } from "@/common/shadcn/card";
import { Anime } from "@/common/types/anime";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card3Skeleton from "../skeleton/anime-skeleton-card3";

interface AnimeCard1Props {
  data: Anime[];
  isLoading: boolean;
}

export default function AnimeCard5({ data, isLoading }: AnimeCard1Props) {
  if (isLoading) {
    return <Card3Skeleton />;
  }
  return (
    <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {data
        ?.map(
          (
            {
              id,
              title,
              image,
              link,
              synopsis,
            },
            i
          ) => {
            return (
              <motion.div
                key={title}
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
                    <CardContent className="w-full flex flex-col p-2">
                      <div className="w-full h-40 sm:h-44 md:h-64 overflow-hidden relative">
                        <Image
                          src={image}
                          alt={title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
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
