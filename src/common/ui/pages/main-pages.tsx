"use client";

import Link from "next/link";
import { Play, Star, Zap, MonitorPlay, Search } from "lucide-react";
import PopularAnimeMainSection from "@/features/anime/components/sections/popular-anime-main-section";
import { motion } from "motion/react";

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
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-center md:text-start text-2xl md:text-4xl font-bold text-red-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              KyyTori
            </motion.p>
            <motion.p
              className="font-medium text-white text-sm md:text-base text-center md:text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              KyyTori adalah website streaming anime dengan episode terlengkap
              dan update tercepat. Akses kapan saja dan dimana saja secara
              gratis. Tunggu apa lagi? Temukan dan tonton anime favoritmu hanya
              di Kyytori !!
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="self-center md:self-start"
            >
              <Link
                href={"/home"}
                className="bg-red-500 px-4 py-3 flex gap-2 items-center justify-center rounded-md transition duration-500 text-white font-semibold"
              >
                <span className="text-sm md:text-base">Mulai Sekarang</span>
                <Play className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Right image */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-28 px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src="/img/kotorii.webp"
            alt="kyytori mascot"
            className="w-[80%] md:w-[90%] h-auto object-contain"
          />
        </motion.div>
      </section>
      {/* Superiority section */}
      <section className="w-full py-16 md:py-20 bg-[#121111] text-white flex flex-col items-center gap-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-red-500"
        >
          Kenapa Pilih Kyytori?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
          {superiorityitems.map(({ title, description, Icon }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 text-center p-6 rounded-lg bg-black/40 animate-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
              <h3 className="font-semibold text-base md:text-lg">{title}</h3>
              <p className="text-xs md:text-sm text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Popular anime */}
      <PopularAnimeMainSection />
      {/* CTA */}
      <motion.div
        className="w-full py-12 md:py-16 bg-[#121111] flex flex-col items-center gap-6 text-white px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-3xl font-bold">
          Siap Nonton Anime Favoritmu?
        </h2>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href={"/home"}
            className="bg-red-500 px-5 py-3 rounded-md hover:bg-red-400 transition font-semibold text-sm md:text-base"
          >
            Mulai Nonton Sekarang
          </Link>
        </motion.div>
      </motion.div>
      {/* Footer */}
      <footer className="w-full py-6 bg-black text-center text-gray-400 text-xs md:text-sm">
        © {new Date().getFullYear()} Kyytori. All rights reserved.
      </footer>
    </div>
  );
}
