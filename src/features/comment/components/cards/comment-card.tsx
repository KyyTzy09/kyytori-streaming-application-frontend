"use client";

import { defaultImage } from "@/common/constant/image";
import { Button } from "@/common/shadcn/button";
import { Comment } from "@/common/types/comment";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import CommentNestedCard from "./comment-nested-card";
import CommentSkeletonCard from "../skeleton/comment-skeleton-card";
import CommentNestedInput from "../inputs/comment-nested-input";
import CommentDropdown from "../modals/comment-dropdown";
import { motion } from "motion/react";
import ProfileHover from "@/features/profile/components/interact/profile-hover";

interface CommentCardProps {
  isLoading?: boolean;
  data?: Comment[];
}

export default function CommentCard({
  data = [],
  isLoading,
}: CommentCardProps) {
  const [indexCard, setIndexCard] = React.useState<number[]>([]);
  const [showReply, setShowReply] = React.useState<number[]>([]);

  const findCardIndex = (index: number) => {
    return indexCard?.includes(index);
  };
  const findShowReplyIndex = (index: number) => {
    return showReply?.includes(index);
  };

  const handleShowReply = (index: number) => {
    setShowReply((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];

      if (safePrev?.includes(index)) {
        return prev?.filter((i) => i !== index);
      } else {
        return [...safePrev, index];
      }
    });
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

  if (isLoading) {
    return <CommentSkeletonCard />;
  }

  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-start overflow-y-auto">
      {data?.length > 0 &&
        data?.map(
          (
            { id, user, episodeTitle, createdAt, message, parent, replies },
            index
          ) => {
            return (
              <div
                key={index}
                className={`flex flex-col w-full h-full gap-2 ${
                  findShowReplyIndex(index)
                    ? "border-l border-y border-gray-500"
                    : ""
                }`}
              >
                <motion.div
                  initial={{ translateX: -100, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 100 }}
                  exit={{ translateX: -100, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex w-full h-full bg-white p-2 md:pr-3 rounded-sm gap-2 md:gap-5"
                >
                  <div className="flex items-start justify-center w-auto md:w-10 h-10">
                    <ProfileHover user={user}>
                      <Image
                        src={user.avatar || defaultImage}
                        alt="profile"
                        className="w-full h-full object-cover rounded-full"
                        width={320}
                        height={200}
                      />
                    </ProfileHover>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <p className="flex w-full text-[10px] md:text-[11px] items-start justify-start">
                        {parent && (
                          <span className="text-red-500 font-bold">
                            {parent?.user?.userName} {">"}
                          </span>
                        )}
                        <span className="text-red-400 font-semibold mr-2">
                          @{user?.userName}
                        </span>
                        <span className="text-gray-500 font-semibold hidden md:inline">
                          {new Date(createdAt).toLocaleString()}
                        </span>
                      </p>
                      <CommentDropdown
                        userId={user?.userId}
                        commentId={id || ""}
                        epsTitle={episodeTitle}
                      />
                    </div>
                    <p
                      className={`${
                        findCardIndex(index)
                          ? "line-clamp-none"
                          : "line-clamp-1"
                      }  w-full text-[12px] md:text-[14px] break-all`}
                    >
                      {message}
                    </p>
                    {message?.length > 100 && (
                      <div className="flex w-full items-center justify-start mt-1">
                        <p
                          onClick={() => handleShowComment(index)}
                          className="font-semibold text-[11px] md:text-[13px] text-gray-500 hover:underline cursor-pointer"
                        >
                          {findCardIndex(index)
                            ? "Baca Sekilas..."
                            : "Baca Selengkapnya..."}
                        </p>
                      </div>
                    )}
                    <div className="w-full flex items-center justify-between gap-3 text-[10px] md:text-[12px] text-gray-500 mt-1">
                      <div className="flex items-center gap-2">
                        <p>Suka</p>
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => handleShowReply(index)}
                        >
                          {findShowReplyIndex(index) ? "Batal" : "Balas"}
                        </button>
                      </div>
                      <span className="text-gray-500 font-semibold inline md:hidden">
                        {new Date(createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
                {replies?.length > 0 && (
                  <>
                    <div className="w-full h-full text-start">
                      <Button
                        onClick={() => handleShowReply(index)}
                        className="rounded-lg flex items-center text-[10px] md:text-[12px] justify-center gap-2 text-white font-semibold bg-transparent hover:bg-[#252525] transition duration-700"
                      >
                        {findShowReplyIndex(index) ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                        ({replies?.length ?? 0}) Balasan
                      </Button>
                    </div>
                  </>
                )}
                <div
                  className={`w-full overflow-hidden transition-all duration-500 ${
                    findShowReplyIndex(index) ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <CommentNestedCard
                    isOpen={findShowReplyIndex(index)}
                    parentId={id}
                  />
                </div>
                <div className="w-full pl-4 md:pl-8 transition-all duration-500 relative">
                  {findShowReplyIndex(index) && (
                    <CommentNestedInput
                      parentId={id}
                      epsTitle={episodeTitle}
                      repliedTo={user.userName}
                    />
                  )}
                </div>
              </div>
            );
          }
        )}
    </div>
  );
}
