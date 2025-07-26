import { defaultImage } from "@/common/constant/image";
import { Episodes } from "@/common/types/anime";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AnimeCard4Props {
  data: Episodes[];
  isLoading: boolean;
}

export default function AnimeCard4({ data, isLoading }: AnimeCard4Props) {
  return (
    <section className="w-full h-full">
      {data?.length > 0 && (
        <div className="w-full h-[300px] md:h-[400px] flex gap-2 overflow-x-auto scrollbar-hide">
          <Link
            href={`/anime/${data[0].anime?.link}/episode/${data[0].link}`}
            className="w-40 md:w-[200px] h-full relative rounded-md overflow-hidden shrink-0 hover:opacity-75 transition duration-700"
          >
            <Image
              className="w-full h-full object-cover opacity-100"
              src={data[0].anime?.image || defaultImage}
              alt={data[0].anime?.title || "title"}
              width={400}
              height={320}
            />
            <p className="absolute z-30 top-0 left-0 rounded-br-sm rounded-tl-sm bg-red-500 py-1 px-3 text-[10px] md:text-[14px] text-white font-semibold">
              #1
            </p>
            <p className="absolute bottom-0 right-0 rounded-tl-sm rounded-br-sm bg-white py-1 px-2 text-[10px] md:text-[14px] text-red-500 font-semibold z-40">
              {data[0].rating}
            </p>
            <div className="w-full h-full absolute bg-black/65 z-10 top-0 bottom-0"></div>
            <div className="w-full h-full absolute z-20 top-0 bottom-0 p-14 pb-16 md:pt-20 md:pb-24 px-5">
              <Image
                className="w-full h-full object-cover rounded-md"
                src={data[0].anime?.image || defaultImage}
                alt={data[0].anime?.title || "title"}
                width={400}
                height={320}
              />
              <div className="w-full flex flex-col h-16 md:h-24 items-start justify-between absolute bottom-0 pb-5">
                <p className="text-white font-semibold text-[10px] md:text-[14px]">
                  Eps {data[0].episode}
                </p>
                <p className="text-red-500 font-bold text-[12px] md:text-[14px] line-clamp-2">
                  {data[0].anime.title}
                </p>
              </div>
            </div>
          </Link>
          <div className="grid grid-rows-2 grid-flow-col h-full gap-2">
            {data?.slice(1, data.length)
              .map(({ anime, episode, link, title, rating }, i) => {
                return (
                  <Link
                    href={`/anime/${anime?.link}/episode/${link}`}
                    key={i}
                    className="w-40 md:w-[200px] relative shrink-0 hover:opacity-75 transition duration-700"
                  >
                    <Image
                      className="w-full h-full object-cover rounded-md"
                      src={anime?.image || defaultImage}
                      alt={anime?.title || "title"}
                      width={400}
                      height={320}
                    />
                    <div className="w-full h-full absolute bg-black/65 z-10 top-0 bottom-0"></div>
                    <div className="w-full h-full absolute z-20 top-0 bottom-0 pt-5 pb-6 px-5">
                      <p className="absolute z-30 top-0 left-0 rounded-br-sm rounded-tl-sm bg-red-500 py-1 px-3 text-[10px] md:text-[14px] text-white font-semibold">
                        #{i + 2}
                      </p>
                      <p className="absolute bottom-0 right-0 rounded-tl-sm rounded-br-sm bg-white py-1 px-2 text-[10px] md:text-[14px] text-red-500 font-semibold z-40">
                        {rating}
                      </p>
                      <Image
                        className="w-full h-full object-cover rounded-md"
                        src={anime?.image || defaultImage}
                        alt={anime?.title || "title"}
                        width={400}
                        height={320}
                      />
                      <div className="w-full flex flex-col h-16 items-start justify-between absolute bottom-0 px-5 right-0 pb-5 bg-gradient-to-b from-transparent to-black z-30">
                        <p className="text-white font-semibold text-[10px] md:text-[14px]">
                          Eps {episode}
                        </p>
                        <p className="text-white drop-shadow-sm drop-shadow-red-500 font-semibold text-[10px] md:text-sm line-clamp-2">
                          {anime.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
}
