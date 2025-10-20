"use client";

import { Button } from "@/common/shadcn/button";
import { Comment } from "@/common/types/comment";
import BackButton from "@/common/ui/buttons/back-button";
import ImageSkeleton from "@/common/ui/skeleton/image-skeleton";
import { useGetDetailAnime } from "@/features/anime/hooks/anime-hook";
import CommentCard from "@/features/comment/components/cards/comment-card";
import CommentInput from "@/features/comment/components/inputs/comment-input";
import { useGetCommentByEpisode } from "@/features/comment/hooks/comment-hook";
import { useGetEpsLink } from "@/features/episodes/hooks/episode-hook";
import { AlertCircleIcon, ArrowLeft, ArrowRight, List } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaComment } from "react-icons/fa";

export default function EpisodeClient() {
  const router = useRouter();
  const { animeTitle, epsTitle } = useParams<{
    animeTitle: string;
    epsTitle: string;
  }>();
  const decodedEpsTitle = decodeURIComponent(epsTitle);
  const { data: epsLink } = useGetEpsLink(decodedEpsTitle);
  const { data: detail } = useGetDetailAnime(animeTitle);
  const { data: comment, isPending: getComment } = useGetCommentByEpisode({
    epsTitle,
  });

  const [iframe, setIframe] = React.useState<string | undefined>();

  const pagination = [
    {
      name: "Sebelumnya",
      value:
        epsLink?.pagination.prevPage &&
        `/anime/${animeTitle}/episode/${epsLink.pagination.prevPage}`,
      Icon: ArrowLeft,
    },
    {
      name: "Semua Episode",
      value: `/anime/${animeTitle}`,
      Icon: List,
    },
    {
      name: "Selanjutnya",
      value:
        epsLink?.pagination.nextPage &&
        `/anime/${animeTitle}/episode/${epsLink.pagination.nextPage}`,
      Icon: ArrowRight,
    },
  ];

  React.useEffect(() => {
    setIframe(epsLink?.data?.[0]["url"]);
  }, [epsLink]);

  return (
    <div className="flex flex-col w-full min-h-screen p-5 gap-5">
      <section className="flex w-full items-center justify-between">
        <p className="font-semibold text-xl line-clamp-1 text-red-500">
          {decodeURIComponent(epsTitle.replace(/\-+/g, " "))}
        </p>
        <BackButton />
      </section>
      <div className="w-full flex flex-col gap-5 items-center">
        <div className="w-full grid grid-cols-3 gap-1">
          {epsLink?.data.map((link, i) => {
            return (
              <Button
                key={i}
                className={`bg-transparent border-red-500 border hover:bg-red-500 transition duration-700 p-1 text-sm ${
                  iframe === link.url && "bg-red-500 border-white"
                }`}
                onClick={() => {
                  setIframe(link.url);
                }}
                disabled={iframe === link.url}
              >
                {link.name}
              </Button>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center w-full h-64 md:h-[500px]">
          {iframe && epsLink?.data.length !== 0 ? (
            <iframe
              className="w-full md:w-[60%] h-full bg-black"
              name={epsTitle}
              title={epsTitle}
              src={iframe}
              allowFullScreen
            ></iframe>
          ) : (
            <ImageSkeleton width={"60%"} height={"full"} />
          )}
          <p className="flex gap-1 text-gray-300 font-semibold text-[10px] md:text-sm w-full md:w-[60%] text-start mt-2">
            <AlertCircleIcon className="text-yellow-400 w-5 h-5" />
            Jika iframe server ini error silahkan ganti ke server yang lainnya !
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          {pagination.map((item) => {
            return (
              <Button
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
                key={item.name}
                onClick={() => router.push(item.value!)}
                disabled={!item.value}
              >
                <item.Icon className="w-5 h-5" />
                {item.name}
              </Button>
            );
          })}
        </div>
        <div className="w-full md:w-[60%] flex flex-col justify-center items-center">
          <p className="text-red-500 font-semibold text-[16px] text-justify md:text-2xl line-clamp-2 w-full">
            {decodeURIComponent(epsTitle.replace(/\-+/g, " ").toUpperCase())}
          </p>
          <p className="w-full text-gray-200 text-[10px] md:text-lg">
            Nonton/Streaming Anime dengan episode{" "}
            <span className="text-red-500">Terlengkap</span>,{" "}
            <span className="text-red-500">Terbaru</span>, dan tentunya{" "}
            <span className="text-red-500">Gratis?</span> nonton di{" "}
            <span className="text-red-500">Kyytori</span> aja.
          </p>
          {/* Sinopsis Section */}
          <section className="mt-2 flex flex-col">
            {detail?.data.synopsis.length! > 0 &&
              detail?.data.synopsis.map((sin) => {
                return (
                  <p
                    key={sin.id}
                    className="text-white font-semibold text-[10px] md:text-sm text-justify"
                  >
                    {sin.text}
                  </p>
                );
              })}
          </section>
          {/* Komentar Section */}
          <section className="w-full h-auto flex flex-col items-center mt-5 bg-transparent border-2 border-red-500 rounded-sm">
            {/* Header komentar */}
            <div className="w-full flex flex-col bg-[#232323] p-5 justify-start gap-5">
              <p className="flex text-white items-center gap-2 justify-start font-bold">
                <FaComment className="text-white" />
                Komentar ({comment?.count || 0})
              </p>
              {/* Input komentar */}
              <CommentInput epsTitle={epsTitle} />
            </div>
            <div className="w-full h-full p-5 flex flex-col gap-5 transition-all">
              {comment?.data?.length! > 0 && (
                <CommentCard
                  data={comment?.data as Comment[]}
                  isLoading={getComment}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
