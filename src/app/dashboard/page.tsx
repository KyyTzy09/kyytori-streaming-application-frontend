import { User } from "@/common/types/user";
import ProfileHeader from "@/common/ui/headers/profile.header";
import ProfileSection from "@/features/profile/components/profile-section";
import { getSession } from "@/lib/session";
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
