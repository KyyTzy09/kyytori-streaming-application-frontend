import { defaultImage } from "@/common/constant/image";
import { Anime, Episodes } from "@/common/types/anime";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EpisodeCardProps {
  animeTitle: string;
  episodes: Episodes[];
  anime: Anime;
}

export default function EpisodeCard({
  animeTitle,
  episodes,
  anime,
}: EpisodeCardProps) {
  let ep;
  console.log(Number(new Date().getDate()));
  return (
    <div className="w-full py-2 grid grid-cols-2 md:grid-cols-4 mt-10 gap-5">
      {episodes.length > 0 ? (
        episodes.map((ep) => {
          return (
            <Link
              href={`/anime/${animeTitle}/episode/${ep.link}`}
              key={ep.title}
              className="group w-full flex flex-col items-center justify-start gap-3 bg-black/70 border-red-600 border rounded-md overflow-hidden relative"
            >
              <div className="flex text-sm p-2 text-white font-mono items-center justify-center bg-red-500 group-hover:bg-red-300 transition duration-700 z-10 absolute top-0 right-0 rounded-bl-sm">
                {isNaN(Number(ep.episode))
                  ? ep.episode
                  : `Eps ${Number(ep.episode)}`}
              </div>
              <div className="flex text-sm p-2 text-white font-mono items-center justify-center bg-red-500 group-hover:bg-red-300 transition duration-700 z-10 absolute top-0 left-0 rounded-br-sm">
                {Number(ep.createdAt.split(",")[0].split(" ")[1]) ===
                Number(new Date().getDate())
                  ? "Hari Ini"
                  : Number(ep.createdAt.split(",")[0].split(" ")[1]) ===
                    Number(new Date().getDate() - 1)
                  ? "Kemarin"
                  : ep.createdAt}
              </div>
              <div className="w-full h-32 relative">
                <Image
                  src={anime.image || defaultImage}
                  alt={ep.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  width={300}
                  height={420}
                />
              </div>
              <div className="flex w-full items-center justify-start gap-3 p-2">
                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-red-500 transition-transform" />
                <p className="line-clamp-1 text-[10px] md:text-sm text-white font-semibold group-hover:text-red-500 transition-transform">
                  {ep.title.replace(/\-+/g, " ")}
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="w-full flex items-center justify-center">
          <p className="text-white font-semibold text-xl">
            Episode Tidak tersedia
          </p>
        </div>
      )}
    </div>
  );
}
