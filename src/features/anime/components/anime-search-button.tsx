"use client";

import { Search } from "lucide-react";
import React from "react";
import AnimeSearchDialog from "./anime-search-dialog";
import { Button } from "@/common/shadcn/button";

export default function AnimeSearchButton() {
  const [onActive, setOnActive] = React.useState<boolean>(false);
  return (
    <>
      <AnimeSearchDialog active={onActive} setActive={setOnActive} />
      <Button onClick={() => setOnActive(true)} className="group w-5 h-5 p-0 cursor-pointer">
        <Search className="w-full h-full text-white group-hover:text-red-500 transition duration-500" />
      </Button>
    </>
  );
}
