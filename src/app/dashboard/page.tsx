import ProfileHeader from "@/features/profile/components/profile.header";
import ProfileSection from "@/features/profile/components/sections/profile-section";
import { authService } from "@/features/auth/services/auth.service";
import React from "react";

export default async function DashboardPage() {
  const user = (await authService.getSession())?.data;
  return (
    <div className="w-full px-10 py-5 min-h-screen">
      <ProfileHeader title={`Selamat Datang ${user?.profile.userName}👋`} />
      <ProfileSection data={user!} />
    </div>
  );
}
