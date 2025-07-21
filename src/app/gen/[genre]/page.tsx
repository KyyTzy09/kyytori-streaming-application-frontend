"use client";

import { Button } from "@/common/shadcn/button";
import { Anime } from "@/common/types/anime";
import NavigationHeader from "@/common/ui/headers/header";
import AnimeCard1 from "@/features/anime/components/anime-card1";
import { useGetAnimeByGenre } from "@/features/genres/hooks/useGetGenres";
import { ArrowBigLeft, ArrowBigRight, ArrowLeft } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface AnimeByGenrePageProps {
  params: {
    genre: string;
  };
}

export default function AnimeByGenrePage({ params }: AnimeByGenrePageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { genre } = useParams<{ genre: string }>();
  const page = searchParams.get("page");
  const decodedGenre = decodeURIComponent(genre);

  const { data: anime, isPending: genreLoad } = useGetAnimeByGenre({
    genre: decodedGenre,
    page: Number(page),
  });

  const paginationItems = [
    {
      name: "Sebelumnya",
      value: anime?.pagination.prevPage
        ? `/gen/${genre}?page=${anime?.pagination.prevPage}`
        : null,
    },
    {
      name: "Selanjutnya",
      value: anime?.pagination.nextPage
        ? `/gen/${genre}?page=${anime?.pagination.nextPage}`
        : null,
    },
  ];

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full flex flex-col min-h-screen p-5">
      <NavigationHeader
        title={`Ditemukan (${anime?.data.length || 0})`}
        description={`Berikut hasil pencarian anime dengan genre ${decodedGenre}`}
        Icon={ArrowLeft}
        action={handleBack}
        actionText="Kembali"
      />
      <div className="w-full flex">
        <AnimeCard1 data={anime?.data as Anime[]} isLoading={genreLoad} />
      </div>
      <section className="w-full flex items-center justify-center gap-5">
        <Button
          className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
          disabled={Number(page) === 1 || Number(page) === 0}
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }),
              router.push(`/gen/${genre}`);
          }}
        >
          <ArrowBigLeft className="text-white w-5 h-5" />
          MinPage
        </Button>
        {paginationItems.map((item) => {
          return (
            <Button
              className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
              disabled={!item.value}
              key={item.name}
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" }),
                  router.push(item.value!);
              }}
            >
              {item.name}
            </Button>
          );
        })}
        <Button
          className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
          disabled={
            Number(page) === Number(anime?.pagination.maxPage) ||
            Number(page) > Number(anime?.pagination.maxPage)
          }
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" }),
              router.push(`/gen/${genre}?page=${anime?.pagination.maxPage}`);
          }}
        >
          MaxPage
          <ArrowBigRight className="text-white w-5 h-5" />
        </Button>
      </section>
    </div>
  );
}
