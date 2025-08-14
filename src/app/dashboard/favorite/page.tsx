"use client";

import AnimeFavoriteCard from "@/features/favorite/components/cards/favorite-anime-card";
import FavoriteHeader from "@/features/favorite/components/favorite-header";
import { useGetUserFavorites } from "@/features/favorite/hooks/favorite-hook";
import Image from "next/image";
import React from "react";

export default function FavoritePage() {
  const { data: favorite, isPending } = useGetUserFavorites();
  return (
    <div className="w-full min-h-screen p-5">
      <FavoriteHeader favoriteLength={favorite?.data.length! || 0} />
      {!isPending && favorite?.data?.length! > 0 ? (
        <div className="w-full h-full bg-gray-50 shadow shadow-black rounded-md p-5">
          <AnimeFavoriteCard data={favorite?.data!} isLoading={isPending} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <Image
            src={"/img/not-found-404.png"}
            alt="404"
            width={300}
            height={300}
            className="w-56 h-56 md:w-80 md:h-80"
          />
          <p className="text-white font-semibold text-lg">Anda belum menambahan anime apapun</p>
        </div>
      )}
    </div>
  );
}
