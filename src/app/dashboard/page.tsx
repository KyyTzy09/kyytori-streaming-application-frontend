import { User } from "@/common/types/user";
import ProfileHeader from "@/features/profile/components/profile.header";
import ProfileSection from "@/features/profile/components/sections/profile-section";
import { getSession } from "@/features/auth/hooks/getSession";
import React from "react";

export default async function DashboardPage() {
  const data = await getSession() as User;
  return (
    <div className="w-full px-10 py-5 min-h-screen">
      <ProfileHeader title={`Selamat Datang ${data.profile.userName}👋`} />
      <ProfileSection data={data} />
    </div>
  );
}
