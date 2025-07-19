import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import { defaultImage } from "@/common/constant/image";
import { animeService } from "@/features/anime/services/anime-service";
import { Star } from "lucide-react";
import AnimeRating from "@/features/anime/components/anime.rating";

interface detailAnimeProps {
  params: {
    animeId: string;
  };
}

export default async function DetailAnime({ params }: detailAnimeProps) {
  const { animeId } = await params;
  const { data: detail } = await animeService.detail({ animeTitle: animeId });
  const { data: episodes } = await animeService.episodes({
    animeTitle: animeId,
  });
  const detailItems = [
    {
      name: "",
      vlaue: detail.duration,
    },
  ];

  return (
    <div className="w-full min-h-screen p-5 flex flex-col">
      <div className="w-full h-[400px] relative flex">
        <Image
          src={detail.image || defaultImage}
          alt={detail.title || "title"}
          className="w-full h-full object-cover"
          width={300}
          height={450}
          quality={100}
        />
        <section className="absolute w-full h-full bg-black/88">
          <div className="w-full flex flex-col justify-center items-center p-2">
            <p className="text-white font-semibold drop-shadow-white drop-shadow-sm text-4xl">
              {detail.title}
            </p>
            <p className="text-red-500 font-semibold text-[18px] drop-shadow-red-500 drop-shadow-sm">
              {detail.titleJap || detail.titleEng || ""}
            </p>
            <div className="mt-5">
              <p>{detail.status}</p>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full h-full flex items-center relative">
        <div className="w-52 flex flex-col absolute z-10 top-0 left-[100px] -translate-y-36">
          <Image
            src={detail.image || defaultImage}
            alt={detail.title || "title"}
            className="w-full h-80 object-cover"
            width={300}
            height={450}
            quality={100}
          />
          <div className="bg-[#252525] w-full p-2 flex flex-col items-center justify-center">
            <h1 className="text-white font-semibold text-sm md:text-[15px]">
              Rating {detail.rating}
            </h1>
            <AnimeRating rating={detail.rating} />
          </div>
        </div>
        <div className="w-full md:pl-[24rem] py-3">
          <p className="text-red-500 font-semibold text-xl mb-4">
            {detail.title}
          </p>
          <div className="w-full flex flex-col items-center gap-3">
            {detail.synopsis.length > 0 &&
              detail.synopsis.map((sin) => {
                return (
                  <p key={sin.id} className="text-white text-justify">
                    {sin.text}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
