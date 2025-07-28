"use client";

import { Button } from "@/common/shadcn/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/common/shadcn/hover-card";
import { Heart } from "lucide-react";
import React from "react";
import { useGetFavorite } from "../hooks/useFavorite";

interface FavoriteButtonProps {
  animeId: string;
}

export default function FavoriteButton({ animeId }: FavoriteButtonProps) {
  const { data: favoriteExist } = useGetFavorite({ animeId });

  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            onClick={() => {}}
            className={`group flex cursor-pointer items-center justify-center w-full h-full bg-black border-2 border-white hover:border-red-500 font-semibold rounded-full transition duration-700`}
          >
            <Heart
              strokeWidth={1}
              className="fill-white group-hover:fill-red-500 group-hover:text-red-500 w-full h-full text-white transition duration-700"
            />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-20 bg-[#232323] p-1 border-red-500">
          <div className="w-full flex">
            <p className="text-white font-semibold text-[10px] text-center">
              Tambahkan ke Favorit
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      {/* <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            className={`group flex cursor-pointer items-center justify-center w-full h-full bg-black border-2 border-red-500 hover:border-white font-semibold rounded-full transition duration-700`}
          >
            <Heart
              strokeWidth={1}
              className="fill-red-500 group-hover:fill-white w-full h-full text-red-500 group-hover:text-white transition duration-700"
            />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-20 bg-[#232323] p-1 border-red-500">
          <div className="w-full flex">
            <p className="text-white font-semibold text-[10px] text-center">
              Hapus dari Favorit
            </p>
          </div>
        </HoverCardContent>
      </HoverCard> */}
    </>
  );
}
