"use client";

import NavigationHeader from "@/common/ui/headers/header";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface FavoriteHeaderProps {
  favoriteLength: number;
}

export default function FavoriteHeader({
  favoriteLength,
}: FavoriteHeaderProps) {
  const router = useRouter();
  const handleAction = () => {
    router.back();
  };
  return (
    <NavigationHeader
      description="Lihat Anime Yang Telah Anda Tambahkan Ke Favorit"
      title={`Anime Favorit (${favoriteLength})`}
      actionText="Kembali"
      action={handleAction}
      Icon={ArrowBigLeft}
    />
  );
}
