"use client";

import { days } from "@/common/constant/day";
import { convertDay } from "@/common/helpers/day";
import { Anime } from "@/common/types/anime";
import NavigationHeader from "@/common/ui/headers/header";
import { useGetAnimeSchedule } from "@/features/anime/hooks/anime-hook";
import { ArrowBigLeft, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";
import AnimeUpdatedCard from "@/features/anime/components/cards/anime-card-update";

export default function ScheduleAnimePage() {
  const router = useRouter();
  const { data: schedule, isPending: scheduleLoad } = useGetAnimeSchedule();

  const alldays = days.map((day) => {
    return day.name;
  });

  const todayIndex = new Date().getDay();

  const rotatedDay = [
    ...alldays.slice(todayIndex),
    ...alldays.slice(0, todayIndex),
  ];

  const Jadwal = [
    {
      day: "Minggu",
      data: schedule?.data.sunday,
    },
    {
      day: "Senin",
      data: schedule?.data.monday,
    },
    {
      day: "Selasa",
      data: schedule?.data.tuesday,
    },
    {
      day: "Rabu",
      data: schedule?.data.wednesday,
    },
    {
      day: "Kamis",
      data: schedule?.data.thursday,
    },
    {
      day: "Jumat",
      data: schedule?.data.friday,
    },
    {
      day: "Sabtu",
      data: schedule?.data.saturday,
    },
  ];

  const sortedJadwal = Jadwal.sort((a, b) => {
    return rotatedDay.indexOf(a.day) - rotatedDay.indexOf(b.day);
  });

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full min-h-screen p-5">
      <NavigationHeader
        description="Catatan: Jadwal ini mungkin tidak sepenuhnya akurat."
        title={"Jadwal anime"}
        actionText="Kembali"
        action={handleBack}
        Icon={ArrowBigLeft}
      />
      <div className="w-full">
        {sortedJadwal.map((jad) => {
          return (
            <div key={jad.day} className="w-full">
              <div className="w-full flex justify-between items-center my-5">
                {jad.day === convertDay(new Date()).name ? (
                  <motion.p
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(255,0,0,0.5)",
                        "0 0 20px rgba(255,0,0,0.9)",
                        "0 0 10px rgba(255,0,0,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`flex items-center justify-center gap-2 bg-red-500 rounded-sm px-3 py-1 text-white font-semibold text-lg ml-1 border-white border`}
                  >
                    <Star className="w-4 h-4" fill="yellow"/>
                    {jad.day}
                  </motion.p>
                ) : (
                  <p className="text-red-500 font-semibold text-lg ml-1">{jad.day}</p>
                )}
              </div>
              <AnimeUpdatedCard data={jad.data as Anime[]} isLoading={scheduleLoad} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
