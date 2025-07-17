"use client";

import React from "react";
import DashboardHeader from "../../../common/ui/headers/header";
import { usePathname, useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";

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
    <DashboardHeader
      description="Lihat informasi tentang dirimu"
      title={title}
      actionText="Kembali"
      action={handleAction}
      Icon={ArrowBigLeft}
    />
  );
}
