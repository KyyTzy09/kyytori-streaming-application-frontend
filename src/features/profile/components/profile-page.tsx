import { User } from "@/common/types/user";
import ProfileHeader from "./profile.header";
import { authService } from "@/features/auth/services/auth.service";
import React from "react";
import ProfileSection from "./sections/profile-section";

export default async function ProfileView() {
  const data = (await authService.getSession())?.data as User;
  return (
    <div className="w-full px-10 py-5 min-h-screen">
      <ProfileHeader title={`Selamat Datang ${data.profile.userName}👋`} />
      <ProfileSection data={data} />
    </div>
  );
}
