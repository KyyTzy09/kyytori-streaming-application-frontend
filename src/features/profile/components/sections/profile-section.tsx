"use client";

import { Label } from "@/common/shadcn/label";
import { User } from "@/common/types/user";
import AvatarDropDown from "@/features/profile/components/avatar-dropdown";
import ProfileForm from "@/features/profile/components/profile-form";
import PreviewImageModal from "../../../../common/ui/modals/preview-modal";
import { Pencil, Settings } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import React from "react";
import UpdateEmailForm from "../../../auth/components/email-update-form";

interface ProfileSectionProps {
  data: User;
}

export default function ProfileSection({ data }: ProfileSectionProps) {
  const [preview, setPreview] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [showInfo, setShowInfo] = React.useState<boolean>(false);

  const handleShowInfo = (infoLength: number) => {
    if (!showInfo) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <ProfileForm data={data} isOpen={isOpen} setIsOpenAction={setIsOpen} />
      <AnimatePresence>
        {preview && (
          <PreviewImageModal
            image={data.profile.avatar}
            setIsPreviewAction={setPreview}
            Width={700}
            height={700}
            isOpen={preview}
          />
        )}
      </AnimatePresence>
      <section className="w-full h-full bg-gray-50 p-3 md:p-5 rounded-md relative">
        <Settings
          onClick={() => setIsOpen(true)}
          className="w-5 h-5 md:w-6 md:h-6 hover:text-red-500 cursor-pointer absolute top-2 right-2 transition duration-700"
        />
        <div className="w-ful h-full flex flex-col md:flex-row items-start gap-5 md:gap-10 mb-5">
          <div className="group w-52 h-52 md:w-40 md:h-40 rounded-full relative">
            <Image
              src={data.profile.avatar}
              alt={data.profile.userName || "Name"}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="group-hover:opacity-100 w-full h-full opacity-0 top-0 bottom-0 absolute bg-black/50 rounded-full items-center flex justify-center">
              <AvatarDropDown
                image={data.profile.avatar}
                setPreviewAction={setPreview}
              >
                <Pencil className="w-5 h-5 text-white" />
              </AvatarDropDown>
            </div>
          </div>
          <div
            className={`${
              showInfo ? "h-full" : "h-40"
            }w-full flex flex-col items-center md:items-start justify-start max-w-[80%] mt-4 gap-3`}
          >
            <p className="text-red-500 text-lg font-bold">
              {data.profile.userName}
            </p>
            <p
              className={`text-gray-500 text-center md:text-start text-xs md:text-sm font-semibold ${
                !showInfo && data.profile.info.length > 200
                  ? "line-clamp-4"
                  : "line-clamp-none"
              }`}
            >
              {data.profile.info}
            </p>
            {data.profile.info.length > 200 && (
              <div className="md:hidden w-full flex items-center justify-end">
                <p
                  onClick={() => handleShowInfo(data.profile.info.length)}
                  className="text-[12px] md:text-sm hover:underline hover:cursor-pointer"
                >
                  {showInfo ? "lihat beberapa" : "Lihat selengkapnya"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:grid md:grid-cols-2 items-center justify-start h-full gap-5">
        <UpdateEmailForm data={data} />
      </section>
    </div>
  );
}
