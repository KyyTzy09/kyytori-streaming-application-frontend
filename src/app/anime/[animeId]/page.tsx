import { Metadata } from "next";
import React from "react";

interface detailAnimeProps {
  params: {
    animeId: string;
  };
}

export default async function DetailAnime({ params }: detailAnimeProps) {
  const { animeId } = await params;
  const id = decodeURI(animeId);
  return (
    <div className="w-full">
      <p className="text-white">{id}</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Detail",
  description: "Detail anime page",
};
