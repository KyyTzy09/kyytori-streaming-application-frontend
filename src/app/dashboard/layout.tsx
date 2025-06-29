import DashboardSideBar from "@/components/navigations/sidebar";
import React from "react";

export default function layout() {
  return (
    <div className="w-full md:flex min-h-screen p-5">
      <section className="w-[30%] h-full">
        < DashboardSideBar/>F
      </section>
      <section className="w-[70%] h-full"></section>
    </div>
  );
}
