"use client";

import { Button } from "@/common/shadcn/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/common/shadcn/hover-card";
import { Heart } from "lucide-react";
import React from "react";
import {
  useDeleteFavorite,
  useGetFavorite,
  usePostFavorite,
} from "../hooks/favorite-hook";

import { useQueryClient } from "@tanstack/react-query";
import { User } from "@/common/types/user";
import { boolean } from "zod";
import UnauthorizedModal from "@/common/ui/modals/unauthorized-modal";

interface FavoriteButtonProps {
  animeId: string;
  user: User;
}

export default function FavoriteButton({ animeId, user }: FavoriteButtonProps) {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  const { data: favoriteExist, isPending: getting } = useGetFavorite({
    animeId,
  });

  const { mutate: addFavorite, isPending: adding } = usePostFavorite({
    animeId,
  });

  const { mutate: deleteFavorite, isPending: removing } = useDeleteFavorite({
    animeId,
  });

  const handleFavorite = () => {
    if (user) {
      if (!favoriteExist?.data) {
        addFavorite();
      } else {
        deleteFavorite();
      }
    } else {
      setIsLogin(true);
    }
  };

  const isFavorited = !!favoriteExist?.data;
  const isLoading = adding || removing || getting;

  return (
    <>
      <UnauthorizedModal isOpen={isLogin} setIsOpenAction={setIsLogin} />
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            disabled={isLoading}
            onClick={handleFavorite}
            className={`${
              favoriteExist?.data
                ? "group flex cursor-pointer items-center justify-center w-full h-full bg-black border-2 border-red-500 hover:border-white font-semibold rounded-full transition duration-700"
                : "group flex cursor-pointer items-center justify-center w-full h-full bg-black border-2 border-white hover:border-red-500 font-semibold rounded-full transition duration-700"
            }`}
          >
            <Heart
              strokeWidth={1}
              className={`${
                isFavorited
                  ? "fill-red-500 group-hover:fill-white group-hover:text-white w-full h-full text-red-500 transition duration-700"
                  : "fill-white group-hover:fill-red-500 group-hover:text-red-500 w-full h-full text-white transition duration-700"
              }`}
            />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-20 bg-[#232323] p-1 border-red-500">
          <div className="w-full flex">
            <p className="text-white font-semibold text-[10px] text-center">
              {isFavorited ? "Hapus Dari Favorit" : "Tambahkan Ke Favorit"}
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}
