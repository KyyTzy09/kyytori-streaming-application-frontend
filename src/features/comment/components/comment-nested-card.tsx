"use client";

import React from "react";
import { useGetReplyCommentByParentId } from "../hooks/comment-hooks";
import CommentCard from "./comment-card";
import { Comment } from "@/common/types/comment";
import CommentSkeletonCard from "./comment-skeleton-card";
import CommentNestedInput from "./comment-nested-input";

interface CommentNestedCardProps {
  parentId: string;
  isOpen: boolean;
}

export default function CommentNestedCard({
  parentId,

  isOpen,
}: CommentNestedCardProps) {
  const { data: replyComments, isPending } = useGetReplyCommentByParentId({
    parentId,
    isOpen,
  });

  return (
    <div className="flex flex-col w-full h-full transition-all duration-500 pl-3 md:pl-5">
      {replyComments?.data?.length! > 0 && (
        <CommentCard
          data={replyComments?.data as Comment[]}
          isLoading={isPending}
        />
      )}
      {isPending || replyComments?.data.length === 0  && <CommentSkeletonCard />}
    </div>
  );
}
