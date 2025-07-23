import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/ui/navigations/navbar";
import { ToastContainer } from "react-toastify";
import { getSession } from "@/features/auth/hooks/getSession";
import QueryProvider from "@/common/providers/query-provider";
import { User } from "@/common/types/user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KyyTori",
  description: "Streaming anime website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getSession();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121111] relative`}
      >
        <ToastContainer />
        <Navbar data={data as User} />
        <section className="w-full min-h-screen">
          <QueryProvider>{children}</QueryProvider>
        </section>
      </body>
    </html>
  );
}
