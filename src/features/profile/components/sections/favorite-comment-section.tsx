"use client";

import { Button } from "@/common/shadcn/button";
import { Separator } from "@/common/shadcn/separator";
import UserCommentCard from "@/features/comment/components/cards/comment-user-card";
import { useGetUserComment } from "@/features/comment/hooks/comment-hook";
import AnimeFavoriteCard from "@/features/favorite/components/cards/favorite-anime-card";
import { useGetUserFavorites } from "@/features/favorite/hooks/favorite-hook";
import React from "react";

export default function FavoriteCommentSection() {
  const [previewType, setPreviewType] = React.useState<string>("fav");

  const { data: favorites, isPending: getFavoritesData } =
    useGetUserFavorites();
  const { data: comments, isPending: getCommentsData } = useGetUserComment();

  const buttonItems = [
    {
      key: "fav",
      text: "Favorit",
      onClick: () => setPreviewType("fav"),
    },
    {
      key: "cmt",
      text: "Komentar",
      onClick: () => setPreviewType("cmt"),
    },
  ];

  return (
    <section className="flex flex-col md:hidden w-full items-center">
      <div className="w-full flex flex-col items-center gap-2 justify-center">
        <Separator className="border-white border mx-5" />
        <div className="w-full flex items-center justify-center gap-1">
          {buttonItems.map(({ key, text, onClick }) => {
            return (
              <Button
                key={key}
                onClick={onClick}
                className={`${
                  key === previewType ? "bg-red-500" : "bg-transparent"
                } w-1/2 flex gap-2 items-center justify-center font-semibold text-sm hover:bg-red-500 transition duration-700`}
              >
                {text}
              </Button>
            );
          })}
        </div>
        <Separator className="border-white mx-5" />
      </div>
      <div className="w-full">
        {previewType === "fav" ? (
          <>
            {favorites?.data.length! > 0 && (
              <div className="w-full flex flex-col min-h-screen items-center justify-start">
                <div className="w-full flex items-center justify-between py-5">
                  <p className="text-red-500 text-sm font-semibold">
                    Anime{" "}
                    <span className="text-white">
                      Favorit (<span>{favorites?.data.length || 0})</span>
                    </span>
                  </p>
                </div>
                <AnimeFavoriteCard
                  data={favorites?.data!}
                  isLoading={getFavoritesData}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {comments?.data.length! > 0 && (
              <div className="w-full flex flex-col min-h-screen items-center justify-start">
                <div className="w-full flex items-center justify-between py-5">
                  <p className="text-red-500 text-sm font-semibold">
                    Komentar{" "}
                    <span className="text-white">
                      Ditambahkan (<span>{comments?.data.length || 0})</span>
                    </span>
                  </p>
                </div>
                <UserCommentCard
                  data={comments?.data!}
                  isLoading={getCommentsData}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
