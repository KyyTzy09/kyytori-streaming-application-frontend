import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/common/shadcn/alert-dialog";
import { Button } from "@/common/shadcn/button";
import React from "react";
import { useDeleteComment } from "../../hooks/comment-hook";

interface CommentDeleteAlertProps {
  commentId: string;
  epsTitle: string;
  deleteComment: boolean;
  setDeleteComment: (value: boolean) => void;
}

export default function CommentDeleteAlert({
  commentId,
  epsTitle,
  deleteComment,
  setDeleteComment,
}: CommentDeleteAlertProps) {
  const { mutate: deleteCommentAction, isPending } = useDeleteComment({
    commentId,
    epsTitle,
  });
  const handleDelete = () => {
    deleteCommentAction();
    setDeleteComment(false);
  };

  return (
    <AlertDialog open={deleteComment}>
      <AlertDialogContent>
        <AlertDialogTitle>Hapus Komentar?</AlertDialogTitle>
        <AlertDialogDescription>
          Apakah kamu yakin ingin menghapus komentar ini?
        </AlertDialogDescription>
        <div className="flex items-center justify-end gap-2 mt-4">
          <Button
            disabled={isPending}
            variant="outline"
            onClick={() => setDeleteComment(false)}
          >
            Batalkan
          </Button>
          <Button
            disabled={isPending}
            onClick={handleDelete}
            variant="destructive"
          >
            Hapus
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
