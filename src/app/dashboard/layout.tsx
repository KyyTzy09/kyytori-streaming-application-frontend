import DashboardSideBar from "@/components/navigations/sidebar";
import { getSession } from "@/lib/session";
import React from "react";

export default async function layout() {
  const data = await getSession();
  return (
    <div className="w-full md:flex min-h-screen">
      <section className="w-80 h-full fixed hidden md:block">
        <DashboardSideBar data={data} />
      </section>
      <section className="w-full md:pl-80 h-full p-5"></section>
    </div>
  );
}
