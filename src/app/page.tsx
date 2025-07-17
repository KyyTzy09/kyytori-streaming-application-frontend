import { Play } from "lucide-react";
import Link from "next/link";

export default function IndexView() {
  return (
    <div className="w-full min-h-screen p-5">
      <div className="w-full h-full flex items-center justify-between">
        <section className="w-1/2 h-full flex items-center md:px-28 md:py-56 ">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <p className="w-full text-4xl font-bold text-red-500 text-start">
              KyyTori
            </p>
            <p className="w-full font-bold text-white text-start">
              Temukan dan tonton anime favoritmu secara gratis ( tanpa iklan )
              cuma disini !!
            </p>
            <Link
              href={"/home"}
              className="bg-red-500 p-4 hover:bg-red-300 flex gap-2 items-center justify-between self-start mt-2 rounded-md transition duration-700"
            >
              <p className="text-white text-[14px] font-semibold">
                Mulai Sekarang
              </p>
              <Play className="w-4 h-4 text-white" />
            </Link>
          </div>
        </section>
        <section className="w-1/2 flex items-center justify-center">
          <img
            src="/img/kotorii.webp"
            alt="yugy"
            className="w-[90%] h-[90%] object-cover"
          />
        </section>
      </div>
    </div>
  );
}

