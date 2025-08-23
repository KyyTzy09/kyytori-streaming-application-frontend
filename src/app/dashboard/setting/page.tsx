import UpdateEmailForm from "@/features/auth/components/forms/email-update-form";
import UpdatePasswordForm from "@/features/auth/components/forms/password-update-form";
import { authService } from "@/features/auth/services/auth.service";
import ProfileHeader from "@/features/profile/components/profile.header";
import React from "react";

export default async function SettingPage() {
  const user = (await authService.getSession())?.data;
  return (
    <div className="w-full min-h-screen p-5">
      <ProfileHeader
        title="Pengaturan"
        description="Kelola pengaturan akun Anda di sini."
      />
      <div className="w-full flex flex-col md:grid md:grid-cols-2 items-center justify-start h-full gap-3">
        <UpdateEmailForm data={user!} />
        <UpdatePasswordForm data={user!} />
      </div>
    </div>
  );
}
