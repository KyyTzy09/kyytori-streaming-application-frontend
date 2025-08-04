import DashboardSideBar from "@/common/ui/navigations/sidebar";
import { authService } from "@/features/auth/services/auth.service";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function layout({ children }: DashboardLayoutProps) {
  const { data } = await authService.getSession();
  return (
    <div className="w-full md:flex min-h-screen">
      <section className="w-80 h-full fixed hidden md:block">
        <DashboardSideBar data={data} />
      </section>
      <section className="w-full md:pl-80 h-full">{children}</section>
    </div>
  );
}
