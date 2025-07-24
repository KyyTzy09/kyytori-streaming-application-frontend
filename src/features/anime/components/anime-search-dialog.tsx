"use client";

import { defaultImage } from "@/common/constant/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/common/shadcn/alert-dialog";
import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { SearchIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AnimeSearchDialogProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

export default function AnimeSearchDialog({
  active,
  setActive,
}: AnimeSearchDialogProps) {
  return (
    <AlertDialog open={active}>
      <AlertDialogContent className="bg-black/80 w-[90%] h-[300px] md:top-52 max-w-none border border-red-500 overflow-hidden gap-0 p-5">
        <Button
          onClick={() => setActive(false)}
          className="group w-5 h-5 absolute top-1 right-1 bg-transparent hover:bg-transparent"
        >
          <XIcon
            strokeWidth={2}
            className="text-white w-full h-full group-hover:text-red-500"
          />
        </Button>
        <AlertDialogTitle className="text-gray-300 font-semibold text-sm">
          Cari Anime
        </AlertDialogTitle>
        <div className="w-full flex flex-col gap-5">
          <section className="w-full flex items-center justify-center h-8 gap-2">
            <Input placeholder="Masukan Judul Anime" className="text-white px-0 py-0 w-[95%] h-full border-b-2 border-r-0 border-l-0 border-t-0 rounded-b-none border-b-white focus-visible:border-b-red-500 focus-visible:ring-transparent transition duration-700" />
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
              className="w-[7%] h-full flex items-end border-red-500 border-2 rounded-sm rounded-bl-none"
            >
              <SearchIcon strokeWidth={2} className="w-full p-1 h-full" />
            </motion.div>
          </section>
          <section className="w-full h-80 flex flex-col overflow-y-auto gap-5">
            <div className="flex items-center justify-between w-full h-40 gap-2 p-2">
              <div className="w-32 max-w-[25%] h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={defaultImage}
                  alt="Haloo"
                  width={450}
                  height={320}
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[75%] h-full overflow-hidden gap-2">
                <p className="font-semibold text-red-500">One Piece</p>
                <p className="w-full text-white line-clamp-2 text-start text-[10px] md:text-sm break-all">
                  ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddds
                </p>
                <div className="w-full grid grid-cols-3 gap-2 overflow-y-auto">
                  <Link href={`/gen/ecchi`} className="flex text-white items-center line-clamp-1 text-center justify-center text-[10px] md:text-[12px] py-1 px-2 font-semibold bg-transparent rounded-sm border border-red-500 hover:bg-red-500 hover:text-white transition duration-700">
                    yaya
                  </Link>
                  <Link href={`/gen/ecchi`} className="flex text-white items-center line-clamp-1 text-center justify-center text-[10px] md:text-[12px] py-1 px-2 font-semibold bg-transparent rounded-sm border border-red-500 hover:bg-red-500 hover:text-white transition duration-700">
                    yaya
                  </Link>
                  <Link href={`/gen/ecchi`} className="flex text-white items-center line-clamp-1 text-center justify-center text-[10px] md:text-[12px] py-1 px-2 font-semibold bg-transparent rounded-sm border border-red-500 hover:bg-red-500 hover:text-white transition duration-700">
                    yaya
                  </Link>
                  <Link href={`/gen/ecchi`} className="flex text-white items-center line-clamp-1 text-center justify-center text-[10px] md:text-[12px] py-1 px-2 font-semibold bg-transparent rounded-sm border border-red-500 hover:bg-red-500 hover:text-white transition duration-700">
                    yaya
                  </Link>
                  <Link href={`/gen/ecchi`} className="flex text-white items-center line-clamp-1 text-center justify-center text-[10px] md:text-[12px] py-1 px-2 font-semibold bg-transparent rounded-sm border border-red-500 hover:bg-red-500 hover:text-white transition duration-700">
                    yaya
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
