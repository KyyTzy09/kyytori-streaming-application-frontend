"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
import NavigationHeader from "@/common/ui/headers/header";

interface ProfileHeaderProps {
  title: string;
  description: string;
}
export default function ProfileHeader({ title, description }: ProfileHeaderProps) {
  const router = useRouter();
  const pathName = usePathname();
  const handleAction = () => {
    if (pathName === "/dashboard") router.push("/home");
    else router.back();
  };
  return (
    <NavigationHeader
      description={description}
      title={title}
      actionText="Kembali"
      action={handleAction}
      Icon={ArrowBigLeft}
    />
  );
}
