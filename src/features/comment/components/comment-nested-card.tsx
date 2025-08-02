"use client";

import React from "react";
import { useGetReplyCommentByParentId } from "../hooks/comment-hooks";
import CommentCard from "./comment-card";
import { Comment } from "@/common/types/comment";
import CommentSkeletonCard from "./comment-skeleton-card";

interface CommentNestedCardProps {
  parentId: string;
}

export default function CommentNestedCard({
  parentId,
}: CommentNestedCardProps) {
  const { data: replyComments, isPending } = useGetReplyCommentByParentId({
    parentId,
  });
  if (isPending || replyComments?.data?.length === 0) {
    return <CommentSkeletonCard />;
  }

  return (
    <div className="flex flex-col w-full h-full transition-all duration-500 pl-3 md:pl-5">
      {replyComments?.data?.length! > 0 && (
        <CommentCard
          data={replyComments?.data as Comment[]}
          isLoading={isPending}
        />
      )}
    </div>
  );
}
