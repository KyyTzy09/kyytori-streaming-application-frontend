"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/shadcn/dropdown-menu";
import { AlertCircleIcon, MoreVerticalIcon, Trash } from "lucide-react";
import React from "react";
import CommentDeleteAlert from "./comment-delete-alert";
import { useGetProfile } from "@/features/profile/hooks/profile-hook";
import { Roles } from "@/common/enums/role";

interface CommentDropdownProps {
  userId: string;
  commentId: string;
  epsTitle: string;
}

export default function CommentDropdown({
  userId,
  commentId,
  epsTitle,
}: CommentDropdownProps) {
  const { data: userProfile } = useGetProfile();
  const [deleteComment, setDeleteComment] = React.useState<boolean>(false);

  const items = [
    {
      name: "Report",
      disabled: false,
      Icon: AlertCircleIcon,
      action: () => {},
    },
    {
      name: "Delete",
      disabled:
        userId !== userProfile?.data?.id && userProfile?.data.role !== Roles.Admin,
      Icon: Trash,
      action: () => setDeleteComment(true),
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            title="more button"
            className="w-3 md:w-4 h-full flex cursor-pointer items-start justify-center"
          >
            <MoreVerticalIcon className="w-full h-full text-black" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28 md:w-32 " side="left">
          {items.map(({ name, Icon, disabled, action }, index) => {
            return (
              <React.Fragment key={index}>
                {!disabled && (
                  <DropdownMenuItem
                    className="w-full flex items-center justify-start gap-2"
                    onClick={() => action()}
                  >
                    <Icon className="w-4 h-4" />
                    {name}
                  </DropdownMenuItem>
                )}
              </React.Fragment>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      {deleteComment && (
        <CommentDeleteAlert
          commentId={commentId}
          epsTitle={epsTitle}
          deleteComment={deleteComment}
          setDeleteComment={setDeleteComment}
        />
      )}
    </>
  );
}
