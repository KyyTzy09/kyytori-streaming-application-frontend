"use client";

import { defaultImage } from "@/common/constant/image";
import { Comment } from "@/common/types/comment";
import Image from "next/image";
import React, { use } from "react";

interface CommentCardProps {
  data: Comment[];
}

export default function CommentCard({ data }: CommentCardProps) {
  const [indexCard, setIndexCard] = React.useState<number[]>();

  const findIndex = (index: number) => {
    return indexCard?.includes(index);
  };

  const handleShowComment = (index: number) => {
    setIndexCard((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];

      if (safePrev?.includes(index)) {
        return prev?.filter((i) => i !== index);
      } else {
        return [...safePrev, index];
      }
    });
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto gap-5 p-5">
      {data?.map(({ user, createdAt, message }, index) => {
        return (
          <div
            key={index}
            className="flex w-full h-full bg-white p-2 rounded-sm gap-5"
          >
            <div className="flex items-start justify-center w-10 h-10">
              <Image
                src={user.avatar || defaultImage}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
                width={320}
                height={200}
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="flex w-full text-gray-500 text-[10px] md:text-[11px] gap-2 items-start justify-start">
                <span className="text-red-400 font-semibold">@{user.userName}</span>
                {new Date(createdAt).toLocaleString()}
              </p>
              <p
                className={`${
                  findIndex(index) ? "line-clamp-none" : "line-clamp-1"
                }  w-full text-[12px] md:text-[14px] break-all`}
              >
                {message}
              </p>
              {message.length > 100 && (
                <div className="flex w-full items-center justify-start mt-1">
                  <p
                    onClick={() => handleShowComment(index)}
                    className="font-semibold text-[11px] md:text-[13px] text-gray-500 hover:underline cursor-pointer"
                  >
                    {findIndex(index)
                      ? "Baca Sekilas..."
                      : "Baca Selengkapnya..."}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
