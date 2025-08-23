import { defaultImage } from "@/common/constant/image";
import { FavoritesAnime } from "@/common/types/favorite";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteSkeletonCard from "../skeletons/favorite-skeleton-card";

interface AnimeFavoriteCardProps {
  data: FavoritesAnime[];
  isLoading: boolean;
}

export default function AnimeFavoriteCard({
  data,
  isLoading,
}: AnimeFavoriteCardProps) {
  if (isLoading) {
    return <FavoriteSkeletonCard />;
  }

  return (
    <>
      {data.length > 0 ? (
        <div className="w-full h-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {data?.length > 0 &&
            data?.map(
              (
                { anime: { image: animeCover, title: animeTitle, link, type } },
                index
              ) => {
                return (
                  <motion.div
                    key={index}
                    className="group w-full h-full"
                    initial={{ translateY: 100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 100 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <Link
                      href={`/anime/${link}`}
                      className="w-full h-auto items-center justify-between flex flex-col bg-[#232323] group-hover:bg-[#353535] group-hover:opacity-70 overflow-hidden rounded-sm relative transition duration-700"
                    >
                      <div className="absolute top-0 right-0 bg-red-500 text-[13px] sm:text-sm px-2 rounded-bl-sm z-20 text-white font-mono">
                        <p className="">{type}</p>
                      </div>
                      <div className="w-full h-auto sm:h-52 md:h-64 p-1">
                        <Image
                          src={animeCover || defaultImage}
                          alt={animeTitle}
                          width={320}
                          height={400}
                          className="w-full h-full object-cover rounded-sm group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="w-full h-10 md:h-12 p-1 bg-[#232323] group-hover:bg-[#353535] overflow-hidden z-20 transition duration-700">
                        <p className="text-white font-semibold text-center text-[10px] sm:text-sm line-clamp-2">
                          {animeTitle}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              }
            )}
        </div>
      ) : isLoading ? (
        <FavoriteSkeletonCard />
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <Image
            src={"/img/not-found-404.png"}
            alt="404"
            width={300}
            height={300}
            className="w-56 h-56 md:w-80 md:h-80"
          />
          <p className="text-white font-semibold text-lg">
            Anda belum menambahkan anime apapun
          </p>
        </div>
      )}
    </>
  );
}
