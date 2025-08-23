import { statusColor } from "@/common/helpers/status";
import { CardContent } from "@/common/shadcn/card";
import { FavoritesAnime } from "@/common/types/favorite";
import CardSkeleton from "@/features/anime/components/skeleton/anime-skeleton-card";
import { PlayCircleIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FavoriteAnimeCard2Props {
  data: FavoritesAnime[];
  isPending: boolean;
}

export default function AnimeFavoriteCard2({
  data,
  isPending,
}: FavoriteAnimeCard2Props) {
  if (isPending) {
    return <CardSkeleton />;
  }
  return (
    <>
      {data?.length === 0 ? (
        <div className="flex flex-col gap-2 items-center justify-center w-full bg-gray-200 rounded-b-sm pb-5">
          <Image
            src={"/img/not-found-404.png"}
            alt="404"
            width={300}
            height={300}
            className="w-56 h-56 md:w-80 md:h-80"
          />
          <p className="text-black font-semibold text-sm md:text-lg">
            Belum ada anime yang ditambahkan
          </p>
        </div>
      ) : (
        <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {data?.map(
            ({ anime: { id, title, link, image, type, status } }, index) => {
              return (
                <Link key={title} href={`/anime/${link}`}>
                  <motion.div
                    key={id}
                    initial={{ translateY: 100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 100 }}
                    transition={{ delay: 0.2 * index }}
                    className="group bg-gradient-to-br from-black via-red-500 to-gray-900 p-0 rounded-sm relative"
                  >
                    <div className="absolute w-full z-10 rounded-sm scale-95 opacity-0 flex items-center justify-center gap-2 group-hover:opacity-100 group-hover:scale-100 bg-black/90 top-0 bottom-0 transition duration-500">
                      <PlayCircleIcon className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-red-500 transition duration-700" />
                    </div>
                    <CardContent className="w-full flex flex-col p-2">
                      <div className="w-full h-40 sm:w-44 md:h-60 overflow-hidden relative">
                        <Image
                          src={image}
                          alt={title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                        <div className="absolute text-red-500 bg-white font-mono right-0 bottom-0 p-1 text-[10px] md:text-sm rounded-tl-sm group-hover:text-white group-hover:bg-red-500 transition duration-500">
                          {type}
                        </div>
                      </div>
                      <div
                        className={`${statusColor(
                          status
                        )} group-hover:bg-white absolute top-2 left-2 p-1 rounded-r-sm text-[10px] md:text-sm font-semibold text-white flex items-center justify-center transition duration-700`}
                      >
                        {status}
                      </div>
                      <p className="text-white line-clamp-1 font-sans">
                        {title}
                      </p>
                    </CardContent>
                  </motion.div>
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
}
