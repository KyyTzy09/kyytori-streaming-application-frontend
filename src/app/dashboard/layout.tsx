import { User } from "@/common/types/user";
import DashboardSideBar from "@/common/ui/navigations/sidebar";
import { getSession } from "@/features/auth/hooks/getSession";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function layout({ children }: DashboardLayoutProps) {
  const data = await getSession();
  return (
    <div className="w-full md:flex min-h-screen">
      <section className="w-80 h-full fixed hidden md:block">
        <DashboardSideBar data={data as User} />
      </section>
      <section className="w-full md:pl-80 h-full">{children}</section>
    </div>
  );
}
