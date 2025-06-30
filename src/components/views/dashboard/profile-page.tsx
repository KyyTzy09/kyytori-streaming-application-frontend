import { User } from "@/common/types/user";
import ProfileHeader from "@/components/headers/profile.header";
import { getSession } from "@/lib/session";
import Image from "next/image";
import React from "react";

export default async function ProfileView() {
  const data = await getSession() as User;
  return (
    <div className="w-full px-10 py-5 min-h-screen">
      <ProfileHeader />
      <section className="w-full h-full bg-gray-50 p-5 rounded-md">
        <div className="w-full flex items-center">
          <div className="w-20 h-20">
            <Image src={data.profile.avatar} alt="" width={400} height={400} />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
