import { dummyAnime } from "@/common/constant/anime";
import { Card, CardContent } from "@/common/shadcn/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewAnimeCard() {
  return (
    <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {dummyAnime
        .map((item) => {
          return (
            <Link key={item.title} href={`/anime/${item.title}`}>
              <Card
                key={item.mal_id}
                className="group bg-transparent p-0 rounded border-none relative"
              >
                <div className="absolute p-2 z-10 rounded-sm translate-y-10 opacity-0 flex flex-col gap-2 w-full group-hover:opacity-100 group-hover:translate-y-0 bg-black/90 top-0 bottom-0 transition duration-700">
                  <p className="text-red-500 font-semibold text-sm text-center">
                    {item.title_japanese}
                  </p>
                  <p className="line-clamp-5 font-semibold text-sm text-center text-white">
                    {item.synopsis}
                  </p>
                </div>
                <CardContent className="w-full flex flex-col p-2">
                  <Image
                    src={item.images.webp.large_image_url}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-32 md:h-60 object-cover relative"
                  />
                  <div className="group-hover:text-red-500 group-hover:bg-white absolute top-2 left-2 p-1 rounded-r-sm bg-red-500 text-sm font-semibold text-white flex items-center justify-center transition duration-700">
                    #{item.episodes}
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
