import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/ui/navigations/navbar";
import { ToastContainer } from "react-toastify";
import QueryProvider from "@/common/providers/query-provider";
import { checkSession } from "@/lib/session";

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
  const session = await checkSession()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121111] relative`}
      >
        <QueryProvider>
          <ToastContainer />
          <Navbar data={session?.data.data!} />
          <section className="w-full min-h-screen">{children}</section>
        </QueryProvider>
      </body>
    </html>
  );
}
