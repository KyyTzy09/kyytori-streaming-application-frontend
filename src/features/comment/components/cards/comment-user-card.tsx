import { Comment } from "@/common/types/comment";
import { EyeIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import CommentSkeletonCard2 from "../skeleton/comment-skeleton-card2";

interface UserCommentCardProps {
  data: Comment[];
  isLoading: boolean;
}

export default function UserCommentCard({
  data,
  isLoading,
}: UserCommentCardProps) {
  if (isLoading) {
    return <CommentSkeletonCard2 />;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map(
        (
          {
            id: commentId,
            episodeTitle: episode,
            message,
            updateAt,
            episode: {
              anime: { link: animeLink, title: animeTitle, image: animeCover },
            },
            user: { userName: name, avatar },
          },
          index
        ) => {
          return (
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 100 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center gap-4 p-4 rounded-md relative bg-white"
              key={commentId}
            >
              <Link
                href={`/anime/${animeLink}/episode/${episode}`}
                className="p-2 rounded-md hover:bg-red-400 flex items-center gap-2 bg-red-500 text-white transition duration-500 ease-in-out absolute bottom-1 right-1"
              >
                <EyeIcon className="w-3 h-3" />
                <p className="text-xs">Lihat</p>
              </Link>
              <div className="flex justify-between w-20 h-20">
                <Image
                  src={animeCover}
                  alt={animeLink}
                  width={100}
                  height={100}
                  className="rounded-md min-w-[80px] h-full object-cover border-2 border-red-500"
                />
              </div>
              <Image
                src={avatar}
                alt={name}
                width={100}
                height={100}
                className="absolute bottom-1 left-16 rounded-full w-10 h-10 border-red-500 border-2"
              />
              <div className="flex flex-col h-full">
                <p className="text-xs text-gray-600 items-center">
                  ●{" "}
                  {updateAt
                    ? new Date(updateAt).toLocaleString()
                    : "Tanggal Tidak diketahui"}
                </p>
                <p className="font-semibold line-clamp-1">{animeTitle}</p>
                <p className="text-sm max-w-[200px] truncate">{message}</p>
              </div>
            </motion.div>
          );
        }
      )}
    </div>
  );
}
