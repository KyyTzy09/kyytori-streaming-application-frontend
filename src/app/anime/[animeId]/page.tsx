import React from "react";

interface detailAnimeProps {
  params: {
    animeId: string;
  };
}

export default function DetailAnime({ params }: detailAnimeProps) {
  const { animeId } = params;
  const id = decodeURI(animeId);
  return (
    <div className="w-full">
      <p className="text-white">{id}</p>
    </div>
  );
}
