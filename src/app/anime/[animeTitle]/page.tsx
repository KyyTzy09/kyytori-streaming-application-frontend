import Image from "next/image";
import React from "react";
import { defaultImage } from "@/common/constant/image";
import { animeService } from "@/features/anime/services/anime-service";
import AnimeRating from "@/features/anime/components/anime.rating";
import Link from "next/link";
import ImageSkeleton from "@/common/ui/skeleton/image-skeleton";
import { ArrowLeft } from "lucide-react";
import { episodeService } from "@/features/episodes/services/eps-service";
import EpisodeCard from "@/features/episodes/components/episode-card";

interface detailAnimeProps {
  params: {
    animeTitle: string;
  };
}

export default async function DetailAnime({ params }: detailAnimeProps) {
  const { animeTitle } = await params;
  const decodedTitle = decodeURIComponent(animeTitle);
  const { data: detail } = await animeService.detail({
    animeTitle: decodedTitle,
  });

  const { data: episodes } = await episodeService.episodes({
    animeTitle: decodedTitle,
  });

  const detailList = [
    {
      name: "Status :",
      value: detail.status,
    },
    {
      name: "Durasi :",
      value: detail.duration,
    },
    {
      name: "Season",
      value: detail.season,
    },
    {
      name: "Tanggal rilis :",
      value: detail.realeseAt,
    },
    {
      name: "Type :",
      value: detail.type,
    },
    {
      name: "Episodes :",
      value: detail.episode || episodes.length,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <section className="w-full min-h-screen p-5 flex flex-col">
        <section className="w-full flex items-center justify-between mb-5">
          <p className="text-white text-lg md:text-xl font-semibold p-1 line-clamp-1">
            Anime <span className="text-red-500 font-mono">{decodedTitle}</span>
          </p>
          <Link
            href={"/home"}
            className="flex text-sm text-white px-2 py-1 items-center justify-center gap-2 bg-red-500 hover:bg-red-400 rounded-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
        </section>
        <div className="w-full h-[400px] relative flex">
          <Image
            src={detail.image || defaultImage}
            alt={detail.title || "title"}
            className="w-full h-full object-cover"
            width={300}
            height={450}
            quality={100}
          />
          <div className="absolute w-full h-full bg-black/88 hidden md:block">
            <div className="w-full flex flex-col justify-center items-center p-2 gap-5">
              <p className="text-white font-semibold drop-shadow-white drop-shadow-sm text-4xl">
                {detail.title}
              </p>
              <p className="text-red-500 font-semibold text-[18px] drop-shadow-red-500 drop-shadow-sm">
                {detail.titleJap || detail.titleEng || ""}
              </p>

              {/* list detail anime */}
              <div className="grid grid-cols-2 w-[34rem] gap-x-2 p-1 items-center justify-center">
                {detailList.map((li) => {
                  return (
                    <div
                      key={li.name}
                      className="w-full flex items-center justify-start gap-2 p-1"
                    >
                      <p className="text-white font-bold flex items-center gap-1">
                        <span className="text-red-500 text-sm">■</span>
                        {li.name}
                      </p>
                      <p className="text-red-500 font-mono">{li.value}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-[34rem] flex flex-wrap gap-2 items-center justify-start">
                {detail.genres.length > 0 &&
                  detail.genres.map((gen) => {
                    return (
                      <Link
                        href={`/genre?genre=${gen.genreName}`}
                        key={gen.genreName}
                        className="flex text-sm items-center justify-center text-white p-1 font-mono rounded-sm bg-black/70 border-red-500 border drop-shadow-red-500 drop-shadow-sm"
                      >
                        {gen.genreName}
                      </Link>
                    );
                  })}
              </div>
              <p className="text-white max-w-[34rem]">
                <span className="text-white font-semibold">
                  Nonton/Streaming Anime {detail.title}
                  {", "}
                </span>{" "}
                Episode terbaru, terlengkap dan update tercepat cuma di{" "}
                <span className="text-red-500 font-semibold">Kyytori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center relative">
          <div className="hidden md:flex w-52 flex-col absolute z-10 top-0 left-[100px] -translate-y-36">
            <Image
              src={detail.image || defaultImage}
              alt={detail.title || "title"}
              className="w-full h-80 object-cover"
              width={300}
              height={450}
              quality={100}
            />
            {!detail.image && <ImageSkeleton width="full" height={80} />}
            <div className="bg-[#252525] w-full p-2 flex flex-col items-center justify-center">
              <h1 className="text-white font-semibold text-sm md:text-[15px]">
                Rating {detail.rating}
              </h1>
              <AnimeRating rating={detail.rating ?? 0} />
            </div>
          </div>
          <div className="w-full md:pl-[24rem] py-3">
            <p className="text-red-500 font-semibold text-xl mb-4">
              {detail.title}
            </p>
            <div className="w-full flex flex-col items-center gap-3">
              {detail.synopsis.length > 0 &&
                detail.synopsis.map((sin) => {
                  return (
                    <p key={sin.id} className="text-white text-justify">
                      {sin.text}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      {/* Episodes section */}
      <section className="w-full h-full bg-[#232323] mt-20 p-5">
        <p className="text-red-500 font-bold text-xl">
          Episode ({episodes.length}):
        </p>
        <EpisodeCard
          animeTitle={animeTitle}
          episodes={episodes}
          anime={detail}
        />
      </section>
    </div>
  );
}
