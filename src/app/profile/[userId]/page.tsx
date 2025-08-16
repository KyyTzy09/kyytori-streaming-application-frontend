"use client";

import { defaultImage } from "@/common/constant/image";
import PreviewImageModal from "@/common/ui/modals/preview-modal";
import AnimeFavoriteCard2 from "@/features/favorite/components/cards/favorite-anime-card2";
import { useGetUserFavorites } from "@/features/favorite/hooks/favorite-hook";
import AvatarDropDown from "@/features/profile/components/interact/avatar-dropdown";
import ProfileHeader from "@/features/profile/components/profile.header";
import {
  usegetProfile,
  useGetSomeoneProfile,
} from "@/features/profile/hooks/profile-hook";
import { Calendar, EyeIcon, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function ProfileUserPage() {
  const [preview, setPreview] = React.useState<boolean>(false);
  const [showInfo, setShowInfo] = React.useState<boolean>(false);

  const { userId } = useParams<{ userId: string }>();
  const { data: selfProfile } = usegetProfile();
  const { data: profile } = useGetSomeoneProfile({ userId });
  const { data: favorites, isPending: gettingFav } = useGetUserFavorites();

  const handleShowInfo = (infoLength: number) => {
    if (!showInfo) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {preview && (
          <PreviewImageModal
            image={profile?.data?.profile?.avatar || defaultImage}
            setIsPreviewAction={setPreview}
            Width={700}
            height={700}
            isOpen={preview}
          />
        )}
      </AnimatePresence>
      <div className="w-full flex flex-col gap-5 min-h-screen p-3 md:p-5">
        <ProfileHeader
          description={`Berisi informasi ${profile?.data.profile.userName}`}
          title={`Selamat datang, ${profile?.data.profile.userName}`}
        />
        <motion.section
          initial={{ translateY: -200, opacity: 0 }}
          animate={{ translateY: 0, opacity: 100 }}
          exit={{ translateY: -200, opacity: 0 }}
          className="w-full h-full bg-gray-50 p-3 md:p-5 rounded-md relative"
        >
          <div className="absolute w-full h-1/2 bg-gradient-to-br from-red-500 via-red-700 to-gray-900 top-0 left-0 rounded-t-sm z-0"></div>
          <div className="w-ful h-full flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10 mb-5">
            <div className="group w-32 h-32 sm:w-40 sm:h-40 rounded-full relative">
              <Image
                src={profile?.data?.profile?.avatar || defaultImage}
                alt={profile?.data?.profile?.userName || "Name"}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="group-hover:opacity-100 w-full h-full opacity-0 top-0 bottom-0 absolute bg-black/50 rounded-full items-center flex justify-center">
                <EyeIcon
                  onClick={() => setPreview(true)}
                  className="w-5 h-5 text-white"
                />
              </div>
            </div>
            <div
              className={`${
                showInfo ? "h-full" : "h-40"
              }w-full flex flex-col items-center md:items-start justify-start max-w-[80%] mt-4 gap-3 relative`}
            >
              <div className="w-full hidden md:flex justify-start items-start md:items-center gap-2">
                <Link
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile?.data.email}&su=${selfProfile?.data.email}&body=Hai, saya ${selfProfile?.data.email}`}
                  target="_blank"
                  className="text-white flex items-center justify-center gap-2"
                >
                  <Mail className="w-6 h-6 bg-red-500 rounded-full p-1 text-white" />
                  {profile?.data.email}
                </Link>

                <p className="text-white flex items-center justify-center gap-2">
                  <Calendar className="w-6 h-6 bg-red-500 rounded-full p-1 text-white" />{" "}
                  Bergabung pada:{" "}
                  {new Date(profile?.data?.createdAt!).toLocaleDateString()}
                </p>
              </div>
              <p className="text-red-500 md:text-white text-lg font-bold">
                {profile?.data?.profile.userName}
              </p>
              <p
                className={`text-gray-500 text-center md:text-start text-xs md:text-sm font-semibold ${
                  !showInfo && profile?.data.profile.info.length! > 200
                    ? "line-clamp-4"
                    : "line-clamp-none"
                }`}
              >
                {profile?.data.profile?.info}
              </p>
              {profile?.data.profile?.info.length! > 200 && (
                <div className="md:hidden w-full flex items-center justify-end">
                  <p
                    onClick={() =>
                      handleShowInfo(profile?.data.profile.info.length!)
                    }
                    className="text-[12px] md:text-sm hover:underline hover:cursor-pointer"
                  >
                    {showInfo ? "lihat beberapa" : "Lihat selengkapnya"}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:hidden flex justify-center items-center gap-2">
            <p className="text-gray-500 flex items-center justify-center gap-2 text-[10px] sm:text-[14px]">
              <Mail className="w-6 h-6 bg-red-500 rounded-full p-1 text-white" />{" "}
              {profile?.data.email}
            </p>
            <p className="text-gray-500 flex items-center justify-center gap-2 text-[10px] sm:text-[14px]">
              <Calendar className="w-6 h-6 bg-red-500 rounded-full p-1 text-white" />{" "}
              Bergabung pada:{" "}
              {new Date(profile?.data?.createdAt!).toLocaleDateString()}
            </p>
          </div>
        </motion.section>
        <motion.div className="w-full h-full flex flex-col bg-gray-50 p-3 md:p-5 rounded-md relative gap-5">
          <div className="w-full flex justify-between">
            <p className="text-red-500 font-bold">
              Favorite Anime ({favorites?.data.length || 0})
            </p>
            {/* Toggle mode */}
          </div>
          <div className="w-full">
            {favorites?.data.length! > 0 ? (
              <AnimeFavoriteCard2
                data={favorites?.data!}
                isPending={gettingFav}
              />
            ) : (
              <div className="flex flex-col gap-2 items-center justify-center w-full h-full bg-gray-200 rounded-b-sm">
                <Image
                  src={"/img/not-found-404.png"}
                  alt="404"
                  width={300}
                  height={300}
                  className="w-56 h-56 md:w-80 md:h-80"
                />
                <p className="text-black font-semibold text-sm md:text-lg">
                  Belum ada anime yang ditambahkan
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
