import Link from "next/link";
import { Play, Star, Zap, MonitorPlay, Search } from "lucide-react";
import { useGetTopAnime } from "@/features/anime/hooks/anime-hook";
import PopularAnimeMainSection from "@/features/anime/components/sections/popular-anime-main-section";

export default function LandingPage() {
  const superiorityitems = [
    {
      title: "Update Super Cepat",
      description: "Episode baru langsung tersedia tanpa nunggu lama.",
      Icon: Zap,
    },
    {
      title: "Gratis & Mudah",
      description: "Tonton anime favoritmu kapan saja tanpa biaya.",
      Icon: MonitorPlay,
    },
    {
      title: "Pilihan Terlengkap",
      description: "Dari anime klasik sampai terbaru ada semua.",
      Icon: Star,
    },
    {
      title: "Pencarian Mudah",
      description:
        "Pencarian anime menjadi mudah dengan fitur yang simple dan mudah digunakan",
      Icon: Search,
    },
  ];
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
      <section className="w-full bg-gradient-to-br from-black/70 via-black/50 to-transparent max-h-screen flex items-center justify-between relative overflow-hidden">
        <img
          src="/img/kyytori.png"
          alt="kyytori"
          className="w-full h-full absolute top-0 opacity-70 -z-10 blur-sm"
        />
        <div className="w-1/2 h-full flex items-center md:px-28 md:py-32">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <p className="w-full text-4xl font-bold text-red-500 text-start">
              KyyTori
            </p>
            <p className="w-full font-semibold text-white text-justify">
              KyyTori adalah website streaming anime dengan episode terlengkap
              dan update tercepat. Akses kapan saja dan dimana saja secara
              gratis. Tunggu apa lagi? Temukan dan tonton anime favoritmu hanya
              di Kyytori !!
            </p>
            <Link
              href={"/home"}
              className="bg-red-500 p-4 hover:bg-red-300 hover:scale-105 flex gap-2 items-center justify-between self-start mt-2 rounded-md transition duration-700 animate-glow"
            >
              <p className="text-white text-[14px] font-semibold">
                Mulai Sekarang
              </p>
              <Play className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center md:mt-28">
          <img
            src="/img/kotorii.webp"
            alt="kyytori mascot"
            className="w-[90%] h-[90%] object-cover"
          />
        </div>
      </section>
      <section className="w-full py-20 bg-[#121111] text-white flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold text-red-500">
          Kenapa Pilih Kyytori?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl w-full">
          {superiorityitems.map(({ title, description, Icon }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center p-5 rounded-lg bg-black/40 hover:scale-105 transition"
              >
                <Icon className="w-10 h-10 text-red-500" />
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <PopularAnimeMainSection />
      <div className="w-full py-16 bg-[#121111] flex flex-col items-center gap-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold">
          Siap Nonton Anime Favoritmu?
        </h2>
        <Link
          href={"/home"}
          className="bg-red-500 px-6 py-3 rounded-md hover:bg-red-400 transition hover:scale-105 font-semibold"
        >
          Mulai Nonton Sekarang
        </Link>
      </div>
      <footer className="w-full py-6 bg-black text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Kyytori. All rights reserved.
      </footer>
    </div>
  );
}
