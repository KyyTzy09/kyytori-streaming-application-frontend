import { statusColor } from "@/common/helpers/status";
import { Card, CardContent } from "@/common/shadcn/card";
import { Anime } from "@/common/types/anime";
import CardSkeleton from "@/common/ui/skeleton/card-skeleton";
import { Play, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AnimeCard2Props {
  data: Anime[];
  isLoading: boolean;
}

export default function AnimeCard2({ data, isLoading }: AnimeCard2Props) {
  if (isLoading) {
    return <CardSkeleton />;
  }
  return (
    <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {data
        ?.map(({ id, title, link, image, type, status }) => {
          return (
            <Link key={title} href={`/anime/${link}`}>
              <Card
                key={id}
                className="group bg-transparent p-0 rounded border-none relative"
              >
                <div className="absolute w-full z-10 rounded-sm scale-95 opacity-0 flex items-center justify-center gap-2 group-hover:opacity-100 group-hover:scale-100 bg-black/90 top-0 bottom-0 transition duration-500">
                  <PlayCircle className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-red-500 transition duration-700" />
                </div>
                <CardContent className="w-full flex flex-col p-2">
                  <div className="w-full h-40 md:h-60 overflow-hidden relative">
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
                    )} group-hover:bg-white absolute top-2 left-2 p-1 rounded-r-sm text-sm font-semibold text-white flex items-center justify-center transition duration-700`}
                  >
                    {status}
                  </div>
                  <p className="text-white line-clamp-1 font-sans">{title}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })
        .slice(0, 15)}
    </div>
  );
}
