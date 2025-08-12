import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/common/shadcn/carousel";
import { Episodes } from "@/common/types/anime";
import { Star, Sun, Timer, Tv2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { statusColor } from "@/common/helpers/status";
import AnimeSkeletonCarousel from "./skeleton/anime-skeleton-carousel";

interface AnimeCarouselProps {
  data: Episodes[];
  isLoading: boolean;
}

export default function AnimeCarousel({ data, isLoading }: AnimeCarouselProps) {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  if (isLoading) {
    return <AnimeSkeletonCarousel />;
  }
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: isHover })]}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-full h-full"
    >
      <CarouselContent className="rounded-md">
        {data?.map(
          (
            {
              anime: {
                image,
                rating,
                link,
                episode,
                status,
                title,
                titleJap,
                type,
                duration,
                season,
                synopsis,
              },
            },
            index
          ) => (
            <CarouselItem key={index}>
              <Link
                href={`/anime/${link}`}
                className="w-full items-center justify-center flex relative"
              >
                <Image
                  src={image || ""}
                  alt="Belum kerender"
                  width={300}
                  height={300}
                  className="w-full h-52 md:h-72 object-cover opacity-80 rounded-md"
                />
                <section className="absolute z-20 flex flex-col w-full h-full bg-black/60 p-5 gap-1">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-red-500 sm:max-w-[300px] md:max-w-[90%] truncate font-semibold text-lg md:text-[30px] drop-shadow-md drop-shadow-red-500 line-clamp-1">
                      {titleJap || title}
                    </p>
                    <p className="text-white drop-shadow-sm drop-shadow-white font-semibold text-lg md:text-[30px]">
                      #{index + 1}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start mb-1">
                    <p className="text-white font-semibold text-[13px] md:text-[16px] line-clamp-3 break-all max-w-[90%] md:max-w-[95%]">
                      {(synopsis.length > 0 && synopsis[0]["text"]) || ""}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start gap-2">
                    <p
                      className={`${statusColor(
                        status
                      )} text-white text-[10px] md:text-sm font-semibold p-2 px-3 rounded-sm`}
                    >
                      {status}
                    </p>
                    <p className="flex items-center justify-center gap-2 text-white text-[10px] md:text-sm font-semibold bg-red-500 p-2 px-3 rounded-sm">
                      <Tv2Icon className="w-4 h-4" />
                      {type}
                    </p>
                    <p className="flex items-center justify-center gap-2 text-white text-[10px] md:text-sm font-semibold bg-red-500 p-2 px-3 rounded-sm">
                      <Star className="fill-yellow-400 w-4 h-4" />
                      {rating}
                    </p>
                    <p className="flex items-center justify-center gap-2 text-white text-[10px] md:text-sm font-semibold bg-red-500 p-2 px-3 rounded-sm">
                      {episode} Eps
                    </p>
                    <p className="hidden md:flex items-center justify-center gap-2 text-white text-[10px] md:text-sm font-semibold bg-red-500 p-2 px-3 rounded-sm">
                      <Timer className="w-4 h-4" />
                      {duration || "Unknown"}
                    </p>
                    <p className="hidden md:flex items-center justify-center gap-2 text-white text-[10px] md:text-sm font-semibold bg-red-500 p-2 px-3 rounded-sm">
                      <Sun className="w-4 h-4" />
                      {season || "Unknown"}
                    </p>
                  </div>
                </section>
                <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-[#121212]"></div>
              </Link>
            </CarouselItem>
          )
        )}
      </CarouselContent>
    </Carousel>
  );
}
