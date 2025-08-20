import { Play } from "lucide-react";
import Link from "next/link";

export default function IndexView() {
  return (
    <div className=" flex flex-col w-full min-h-screen overflow-hidden">
      <div className="w-full bg-gradient-to-br from-black/70 via-black/50 to-transparent max-h-screen flex items-center justify-between relative overflow-hidden">
        <img src="/img/kyytori.png" alt="kyytori" className="w-full h-full absolute top-0 opacity-70 -z-10 blur-sm" />
        <section className="w-1/2 h-full flex items-center md:px-28 md:py-32">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <p className="w-full text-4xl font-bold text-red-500 text-start">
              KyyTori
            </p>
            <p className="w-full font-semibold text-white text-justify">
              KyyTori adalah website streaming anime dengan episode terlengkap
              dan update tercepat, Yang bisa diakses kapan saja dan dimana saja
              secara gratis. Tunggu apa lagi? Temukan dan tonton anime favoritmu
              hanya di Kyytori !!
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
        </section>
        <section className="w-1/2 flex items-center justify-center md:mt-28">
          <img
            src="/img/kotorii.webp"
            alt="yugy"
            className="w-[90%] h-[90%] object-cover"
          />
        </section>
      </div>
      <div className="w-full h-screen flex items-center justify-between z-10 relative bg-[#121111] md:translate-y-10"></div>
    </div>
  );
}
