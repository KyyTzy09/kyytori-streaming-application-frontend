import { animeService } from "@/features/anime/services/anime-service";
import React from "react";

export default async function AnimeListPage() {
  const { data } = await animeService.listAnime({ page: 1 });
  console.log(data);
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="w-full flex items-center justify-between"></section>
    </div>
  );
}
