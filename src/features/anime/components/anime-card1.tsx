import { Card, CardContent } from "@/common/shadcn/card";
import { Anime } from "@/common/types/anime";
import CardSkeleton from "@/common/ui/skeleton/card-skeleton";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AnimeCard1Props {
  data: Anime[];
  isLoading: boolean;
}

export default function AnimeCard1({ data, isLoading }: AnimeCard1Props) {
  if (isLoading) {
    return <CardSkeleton />;
  }
  return (
    <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {data
        ?.map((item) => {
          return (
            <Link key={item.title} href={`/anime/${item.link}`}>
              <Card
                key={item.id}
                className="group bg-transparent p-0 rounded border-none relative"
              >
                <div className="absolute p-2 md:p-4 z-10 rounded-sm translate-y-10 opacity-0 flex flex-col justify-between gap-2 w-full group-hover:opacity-100 group-hover:translate-y-0 bg-black/90 top-0 bottom-0 transition duration-700">
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-red-500 font-semibold text-[13px] md:text-[16px] text-center">
                      {item.titleJap || item.titleEng || item.title}
                    </p>
                    {item.synopsis.length > 0 && (
                      <p className="text-white line-clamp-3 text-start text-[15px] md:text-sm">
                        {item.synopsis[0]["text"]}
                      </p>
                    )}
                  </div>
                  <div className="w-full grid grid-cols-2 gap-2">
                    {item.genres.length > 0 &&
                      item.genres
                        .map((gen) => {
                          return (
                            <p
                              key={gen.genreName}
                              className="text-white flex items-center line-clamp-1 text-center justify-center text-[8px] md:text-[12px] p-1 font-semibold bg-red-500 rounded-sm"
                            >
                              {gen.genreName || ""}
                            </p>
                          );
                        })
                        .slice(0, 4)}
                  </div>
                </div>
                <CardContent className="w-full flex flex-col p-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-40 md:h-60 object-cover group-hover:scale-105 relative transition duration-500"
                  />
                  <div className="group-hover:text-red-500 group-hover:bg-white absolute top-2 left-2 p-1 rounded-r-sm bg-red-500 text-sm font-semibold text-white flex items-center justify-center transition duration-700">
                    {item.status}
                  </div>
                  <p className="text-white line-clamp-1">{item.title}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })
        .slice(0, 15)}
    </div>
  );
}
