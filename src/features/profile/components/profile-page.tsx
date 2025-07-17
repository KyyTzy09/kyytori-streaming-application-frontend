import { User } from "@/common/types/user";
import ProfileHeader from "./profile.header";
import { getSession } from "@/features/auth/hooks/getSession";
import React from "react";
import ProfileSection from "./profile-section";

export default async function ProfileView() {
  const data = (await getSession()) as User;
  return (
    <div className="w-full px-10 py-5 min-h-screen">
      <ProfileHeader title={`Selamat Datang ${data.profile.userName}👋`} />
      <ProfileSection data={data} />
    </div>
  );
}
