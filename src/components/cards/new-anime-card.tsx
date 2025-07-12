import { dummyAnime } from "@/common/constant/anime";
import { fetcher } from "@/common/helpers/axios";
import { Card, CardContent } from "@/common/shadcn/card";
import { Anime } from "@/common/types/anime";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function NewAnimeCard() {
  const { data } = await fetcher.get(`/anime/anime-ongoing`);
  const animeData: Anime[] = data.data;
  return (
    <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {animeData
        .map((item) => {
          return (
            <Link key={item.title} href={`/anime/${item.link}`}>
              <Card
                key={item.id}
                className="group bg-transparent p-0 rounded border-none relative"
              >
                <div className="absolute p-2 z-10 rounded-sm translate-y-10 opacity-0 flex flex-col gap-2 w-full group-hover:opacity-100 group-hover:translate-y-0 bg-black/90 top-0 bottom-0 transition duration-700">
                  <p className="text-red-500 font-semibold text-sm text-center">
                    {item.titleJap || item.titleEng || item.title}
                  </p>
                  <p className="line-clamp-5 font-semibold text-sm text-center text-white"></p>
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
