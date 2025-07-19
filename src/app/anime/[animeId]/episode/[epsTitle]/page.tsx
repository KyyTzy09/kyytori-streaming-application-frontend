"use client";

import { useGetEpsLink } from "@/features/anime/hooks/useGetAnime";
import React from "react";

interface EpisodePageProps {
  params: { epsTitle: string };
}

export default function Episodepage({ params }: EpisodePageProps) {
  const { epsTitle } = params;
  const { data: epsLink } = useGetEpsLink(epsTitle);
  console.log(epsLink);
  return (
    <div>
      <p>dfsdfs</p>
      <p>dsduis</p>
    </div>
  );
}
