import { dummyAnime } from "@/common/constant/anime";
import { Card, CardContent } from "@/common/shadcn/card";
import Image from "next/image";
import React from "react";

export default function NewAnimeCard() {
  const data = dummyAnime;
  return (
    <div className="w-full gap-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {dummyAnime.map((item) => {
        return (
          <Card key={item.mal_id} className="p-0 bg-transparent rounded">
            <CardContent className="w-full flex flex-col p-2">
              <Image
                src={item.images.webp.large_image_url}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-32 md:h-52 object-cover"
              />
              <p className="text-white">{item.title}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
