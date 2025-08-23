"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/common/shadcn/alert-dialog";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { ArrowBigLeft, ArrowBigRight, SearchIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import React, { ChangeEvent } from "react";
import { useGetSearchAnime } from "../hooks/anime-hook";
import AnimeCard3 from "./cards/anime-card3";
import { Anime } from "@/common/types/anime";

interface AnimeSearchDialogProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

export default function AnimeSearchDialog({
  active,
  setActive,
}: AnimeSearchDialogProps) {
  const [search, setSearch] = React.useState<string>("");
  const [debounce, setDebounce] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setTimeout(() => {
      setDebounce(e.target.value);
    }, 1000);
  };

  const { data: anime, isPending: isLoading } = useGetSearchAnime(
    debounce,
    Number(page)
  );

  const paginationItems = [
    {
      name: "<Sebelumnya",
      value: anime?.pagination.prevPage
        ? Number(anime?.pagination.prevPage)
        : page !== 1
        ? 1
        : null,
    },
    {
      name: "Selanjutnya>",
      value: anime?.pagination.nextPage
        ? Number(anime?.pagination.nextPage)
        : null,
    },
  ];

  React.useEffect(() => {
    setSearch("");
    setPage(1);
  }, [setSearch, setPage]);

  return (
    <AlertDialog open={active}>
      <AlertDialogContent className="bg-black/80 w-[90%] max-w-none border border-red-500 overflow-hidden gap-0 p-5">
        <Button
          onClick={() => setActive(false)}
          className="group w-5 h-5 absolute top-1 right-1 bg-transparent hover:bg-transparent"
        >
          <XIcon
            strokeWidth={2}
            className="text-white w-full h-full group-hover:text-red-500"
          />
        </Button>
        <div className="w-full flex flex-col items-center justify-between gap-5">
          <AlertDialogTitle className="w-full flex text-white font-semibold justify-between mb-0">
            <p>Cari Anime</p>
          </AlertDialogTitle>
          <section className="w-full flex items-center justify-center h-8 gap-2">
            <Input
              value={search}
              onChange={handleChange}
              placeholder="Masukan Judul Anime"
              className="text-white px-0 py-0 w-[90%] sm:w-[95%] h-full border-b-2 border-r-0 border-l-0 border-t-0 rounded-b-none border-b-white focus-visible:border-b-red-500 focus-visible:ring-transparent transition duration-700"
            />
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255,0,0,0.5)",
                  "0 0 30px rgba(255,0,0,0.9)",
                  "0 0 10px rgba(255,0,0,0.5)",
                ],
                padding: [0, 1, 0],
                color: [
                  "rgba(255,255,255)",
                  "rgba(255,0,0,0.9)",
                  "rgba(255,255,255)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[10%] sm:w-[7%] h-full flex items-end border-red-500 border-2 rounded-sm rounded-bl-none"
            >
              <SearchIcon strokeWidth={2} className="w-full p-1 h-full" />
            </motion.div>
          </section>
          <div className="w-full flex items-center justify-between">
            <p className="text-white text-[12px] md:text-[13px] font-semibold">
              Ditemukan ({anime?.data.length || 0})
            </p>
          </div>
          <div className="w-full">
            <AnimeCard3 data={anime?.data as Anime[]} isLoading={isLoading} />
          </div>
          <section className="w-full flex flex-wrap items-center justify-center gap-2">
            <Button
              className="text-white font-semibold bg-red-500 hover:bg-red-400 transition duration-700 text-[10px] md:text-sm"
              disabled={Number(page) === 1 || Number(page) === 0}
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" }), setPage(1);
              }}
            >
              <ArrowBigLeft className="text-white w-4 h-4" />
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
                      setPage(item.value as number);
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
            <Button
              className="text-white p-1 text-[12px] font-semibold bg-red-500 hover:bg-red-400 transition duration-700"
              disabled={
                !anime?.pagination ||
                Number(page) === Number(anime?.pagination.maxPage) ||
                Number(page) > Number(anime?.pagination.maxPage)
              }
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" }),
                  setPage(Number(anime?.pagination.maxPage));
              }}
            >
              MaxPage
              <ArrowBigRight className="text-white w-4 h-4" />
            </Button>
          </section>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
