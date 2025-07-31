"use client";

import { defaultImage } from "@/common/constant/image";
import { Button } from "@/common/shadcn/button";
import { Textarea } from "@/common/shadcn/textarea";
import { SendIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { usePostComment } from "../hooks/comment-hooks";
import { toast } from "react-toastify";

interface CommentInputProps {
  epsTitle: string;
}

export default function CommentInput({ epsTitle }: CommentInputProps) {
  const [onFocus, setOnFocus] = React.useState<boolean>(false);
  const [comment, setComment] = React.useState<string>("");

  const changeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const { mutate: postComment, isPending: isPosting } = usePostComment({
    epsTitle,
    message: comment,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postComment();
    setComment("");
    setOnFocus(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex items-start justify-start gap-5"
    >
      <section className="w-10 h-10">
        <Image
          src={defaultImage}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
          width={320}
          height={200}
        />
      </section>
      <section className="flex flex-col w-full items-center justify-start gap-3">
        <Textarea
          onChange={changeComment}
          onFocus={() => setOnFocus(true)}
          value={comment}
          className="bg-white text-[12px] md:text-sm"
          placeholder={`Tambahkan komentar sebagai Kyynotseph`}
        />
        {onFocus && (
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              type="button"
              onClick={() => {
                setOnFocus(false), setComment("");
              }}
              className="bg-transparent transition duration-700 hover:bg-red-400"
            >
              Batal
            </Button>
            <Button
              disabled={comment.length === 0}
              type="submit"
              className="px-6 flex bg-red-500 items-center justify-center gap-2 hover:bg-red-400 transition duration-700 cursor-pointer"
            >
              <SendIcon className="text-white h-2" />
              Kirim
            </Button>
          </div>
        )}
      </section>
    </form>
  );
}
