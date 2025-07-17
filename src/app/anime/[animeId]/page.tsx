import { animeService } from "@/features/anime/services/anime-service";
import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";

interface detailAnimeProps {
  params: {
    animeId: string;
  };
}

export default async function DetailAnime({ params }: detailAnimeProps) {
  const { animeId } = await params;
  const detail = await animeService.detail(animeId);
  return (
    <div className="w-full min-h-screen p-5 flex">
      <div className="flex flex-col items-center w-60 gap-2">
        <Image
          src={detail.image}
          alt={detail.title || "ya"}
          className="w-full h-80 object-cover"
          width={200}
          height={200}
        />
        <div className="bg-red-600 w-full">
          <h1 className="text-white font-semibold p-1">Rating :</h1>
          <Rating defaultValue={detail.rating / 2} precision={0.1} readOnly />
        </div>
      </div>
      <div></div>
    </div>
  );
}
