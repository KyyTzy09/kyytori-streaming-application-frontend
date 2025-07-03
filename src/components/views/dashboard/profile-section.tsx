"use client";

import { Label } from "@/common/shadcn/label";
import { User } from "@/common/types/user";
import AvatarDropDown from "@/components/dropdown/avatar-dropdown";
import ProfileForm from "@/components/form/profile-form";
import PreviewImageModal from "@/components/modals/preview-modal";
import { Bookmark, Pencil, Settings } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import React from "react";
import { FaComment } from "react-icons/fa";

interface ProfileSectionProps {
  data: User;
}

export default function ProfileSection({ data }: ProfileSectionProps) {
  const [preview, setPreview] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
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
        <div className="w-ful h-full flex flex-col md:flex-row items-center gap-5 md:gap-10 ">
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
          <div className="w-full flex flex-col items-center md:items-start justify-start max-w-[80%] h-40 mt-4 gap-3">
            <p className="text-red-500 text-lg font-bold">
              {data.profile.userName}
            </p>
            <div className="w-full flex items-center justify-center md:justify-start gap-3">
              <Label className="text-black flex items-center gap-1 justify-start">
                0
                <Bookmark
                  strokeWidth={1}
                  fill="red"
                  className="w-5 h-5 text-red-500"
                />
              </Label>
              <Label className="text-black flex items-center gap-2 justify-start">
                0
                <FaComment
                  strokeWidth={1}
                  fill="red"
                  className="w-5 h-5 text-red-500"
                />
              </Label>
            </div>
            <p className="text-gray-500 text-center md:text-start text-xs md:text-sm font-semibold line-clamp-4">
              {data.profile.info}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
