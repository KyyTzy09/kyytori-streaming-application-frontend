import { dummyAnime } from "@/common/constant/anime";
import { Card, CardContent } from "@/common/shadcn/card";
import Image from "next/image";
import React from "react";

export default function NewAnimeCard() {
  return (
    <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {dummyAnime.map((item) => {
        return (
          <Card
            key={item.mal_id}
            className="group bg-transparent p-0 rounded border-none relative"
          >
            <div className="absolute w-full opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 bg-black/50 top-0 bottom-0 transition duration-700">

            </div>
            <CardContent className="w-full flex flex-col p-2">
              <Image
                src={item.images.webp.large_image_url}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-32 md:h-60 object-cover"
              />
              <p className="text-white">{item.title}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
