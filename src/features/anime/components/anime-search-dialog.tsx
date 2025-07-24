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
        <div className="w-full flex flex-col items-center justify-start gap-5">
          <section className="w-full flex text-white font-semibold justify-between">
            <p>Cari Anime</p>
          </section>
          <section className="w-full flex items-center justify-center h-8 gap-2">
            <Input
              placeholder="Masukan Judul Anime"
              className="text-white px-0 py-0 w-[95%] h-full border-b-2 border-r-0 border-l-0 border-t-0 rounded-b-none border-b-white focus-visible:border-b-red-500 focus-visible:ring-transparent transition duration-700"
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
              className="w-[7%] h-full flex items-end border-red-500 border-2 rounded-sm rounded-bl-none"
            >
              <SearchIcon strokeWidth={2} className="w-full p-1 h-full" />
            </motion.div>
          </section>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
