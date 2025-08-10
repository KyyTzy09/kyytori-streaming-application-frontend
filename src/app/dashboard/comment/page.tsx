"use client";

import CommentHeader from "@/features/comment/components/comment-header";
import UserCommentCard from "@/features/comment/components/cards/comment-user-card";
import { useGetUserComment } from "@/features/comment/hooks/comment-hook";
import React from "react";

export default function CommentPage() {
  const { data: comment, isPending } = useGetUserComment();
  return (
    <div className="w-full flex flex-col min-h-screen p-5">
      <CommentHeader komentarLength={comment?.data?.length || 0} />
      <div className="w-full flex flex-col min-h-screen">
        <UserCommentCard data={comment?.data!} isLoading={isPending} />
      </div>
    </div>
  );
}
