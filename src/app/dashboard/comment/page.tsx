"use client";

import CommentHeader from "@/features/comment/components/comment-header";
import UserCommentCard from "@/features/comment/components/cards/comment-user-card";
import { useGetUserComment } from "@/features/comment/hooks/comment-hook";
import React from "react";
import Image from "next/image";

export default function CommentPage() {
  const { data: comment, isPending } = useGetUserComment();
  return (
    <div className="w-full flex flex-col min-h-screen p-5">
      <CommentHeader komentarLength={comment?.data?.length || 0} />
      {!isPending && comment?.data?.length! > 0 ? (
        <div className="w-full flex flex-col min-h-screen">
          <UserCommentCard data={comment?.data!} isLoading={isPending} />
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
          <p className="text-white font-semibold text-lg">
            Anda belum menambahkan komentar apapun
          </p>
        </div>
      )}
    </div>
  );
}
