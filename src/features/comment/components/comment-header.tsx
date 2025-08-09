"use client";

import NavigationHeader from "@/common/ui/headers/header";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface FavoriteHeaderProps {
  komentarLength: number;
}

export default function CommentHeader({
  komentarLength,
}: FavoriteHeaderProps) {
  const router = useRouter();
  const handleAction = () => {
    router.back();
  };
  return (
    <NavigationHeader
      description="Lihat Komentar Anda"
      title={`Komentar (${komentarLength})`}
      actionText="Kembali"
      action={handleAction}
      Icon={ArrowBigLeft}
    />
  );
}
