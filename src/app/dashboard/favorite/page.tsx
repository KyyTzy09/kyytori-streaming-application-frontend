"use client";

import AnimeFavoriteCard from "@/features/favorite/components/favorite-anime-card";
import FavoriteHeader from "@/features/favorite/components/favorite-header";
import { useGetUserFavorites } from "@/features/favorite/hooks/favorite-hook";
import React from "react";

export default function FavoritePage() {
  const { data: favorite, isPending } = useGetUserFavorites();
  return (
    <div className="w-full min-h-screen p-5">
      <FavoriteHeader favoriteLength={favorite?.data.length!} />
      <div className="w-full h-full bg-gray-50 shadow shadow-black rounded-md p-5">
        <AnimeFavoriteCard data={favorite?.data!} />
      </div>
    </div>
  );
}
