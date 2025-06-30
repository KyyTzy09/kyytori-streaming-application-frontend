"use client";

import React from "react";
import DashboardHeader from "./header";
import { usePathname, useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";

export default function ProfileHeader() {
  const router = useRouter();
  const pathName = usePathname();
  const handleAction = () => {
    if (pathName === "/dashboard") router.push("/");
    else router.back();
  };
  return (
    <DashboardHeader
      title="Profile Page"
      actionText="Kembali"
      action={handleAction}
      Icon={ArrowBigLeft}
    />
  );
}
