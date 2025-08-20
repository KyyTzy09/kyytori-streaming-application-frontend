import Link from "next/link";
import { Play, Star, Zap, MonitorPlay, Search } from "lucide-react";
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
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-black/70 via-black/50 to-transparent flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <img
          src="/img/kyytori.png"
          alt="kyytori"
          className="w-full h-full absolute top-0 opacity-70 -z-10 blur-sm object-cover"
        />
        {/* Left text */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-28 py-20 md:py-32">
          <div className="flex flex-col gap-4">
            <p className="text-center md:text-start text-2xl md:text-4xl font-bold text-red-500">
              KyyTori
            </p>
            <p className="font-medium text-white text-sm md:text-base text-center md:text-justify leading-relaxed">
              KyyTori adalah website streaming anime dengan episode terlengkap
              dan update tercepat. Akses kapan saja dan dimana saja secara
              gratis. Tunggu apa lagi? Temukan dan tonton anime favoritmu hanya
              di Kyytori !!
            </p>
            <Link
              href={"/home"}
              className="self-center bg-red-500 px-4 py-3 hover:bg-red-400 hover:scale-105 flex gap-2 items-center justify-center md:justify-between md:self-start mt-4 rounded-md transition duration-500"
            >
              <span className="text-white text-sm md:text-base font-semibold">
                Mulai Sekarang
              </span>
              <Play className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
        {/* Right image */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-28 px-6">
          <img
            src="/img/kotorii.webp"
            alt="kyytori mascot"
            className="w-[80%] md:w-[90%] h-auto object-contain"
          />
        </div>
      </section>

      {/* Superiority section */}
      <section className="w-full py-16 md:py-20 bg-[#121111] text-white flex flex-col items-center gap-10 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-red-500">
          Kenapa Pilih Kyytori?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
          {superiorityitems.map(({ title, description, Icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center p-6 rounded-lg bg-black/40 hover:scale-105 transition"
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
              <h3 className="font-semibold text-base md:text-lg">{title}</h3>
              <p className="text-xs md:text-sm text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular anime */}
      <PopularAnimeMainSection />

      {/* CTA */}
      <div className="w-full py-12 md:py-16 bg-[#121111] flex flex-col items-center gap-6 text-white px-6 text-center">
        <h2 className="text-xl md:text-3xl font-bold">
          Siap Nonton Anime Favoritmu?
        </h2>
        <Link
          href={"/home"}
          className="bg-red-500 px-5 py-3 rounded-md hover:bg-red-400 transition hover:scale-105 font-semibold text-sm md:text-base"
        >
          Mulai Nonton Sekarang
        </Link>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-black text-center text-gray-400 text-xs md:text-sm">
        © {new Date().getFullYear()} Kyytori. All rights reserved.
      </footer>
    </div>
  );
}
