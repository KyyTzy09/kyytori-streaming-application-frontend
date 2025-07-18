import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import { defaultImage } from "@/common/constant/image";
import { animeService } from "@/features/anime/services/anime-service";

interface detailAnimeProps {
  params: {
    animeId: string;
  };
}

export default async function DetailAnime({ params }: detailAnimeProps) {
  const { animeId } = await params;
  const { data: detail } = await animeService.detail({ animeTitle: animeId });
  return (
    <div className="w-full min-h-screen py-5 px-10 flex">
      <div className="flex flex-col items-center w-60 gap-2">
        <div className="w-full h-80 p-1 bg-red-500">
          <Image
            src={detail.image || defaultImage}
            alt={detail.title || "ya"}
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>
        <div className="bg-red-600 w-full p-1 ">
          <h1 className="text-white font-semibold p-1">Rating :</h1>
          <Rating
            defaultValue={(detail.rating as number) / 2}
            precision={0.1}
            readOnly
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
