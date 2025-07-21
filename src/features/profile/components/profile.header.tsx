"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
import NavigationHeader from "@/common/ui/headers/header";

interface ProfileHeaderProps {
  title: string;
}
export default function ProfileHeader({ title }: ProfileHeaderProps) {
  const router = useRouter();
  const pathName = usePathname();
  const handleAction = () => {
    if (pathName === "/dashboard") router.push("/home");
    else router.back();
  };
  return (
    <NavigationHeader
      description="Lihat informasi tentang dirimu"
      title={title}
      actionText="Kembali"
      action={handleAction}
      Icon={ArrowBigLeft}
    />
  );
}
