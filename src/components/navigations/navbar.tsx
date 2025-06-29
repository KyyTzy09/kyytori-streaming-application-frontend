import { Search } from "lucide-react";
import React from "react";
import AuthButton from "../buttons/auth.button";
import { getSession } from "@/lib/session";

export default async function Navbar() {
  const data = await getSession();
  return (
    <nav className="w-full h-20 border-b">
      <div className="w-full h-full p-8 flex items-center justify-between">
        <p className="text-red-500 light:text-black font-bold text-xl">
          KyyTori<span className="text-white">.id</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <Search className="w-5 h-5 text-white" />
          <AuthButton data={data}/>
        </div>
      </div>
    </nav>
  );
}
