"use client";

import { defaultImage } from "@/common/constant/image";
import Image from "next/image";
import React from "react";

export default function CommentCard() {
  const [showComment, setShowComment] = React.useState<boolean>(false);
  const [indexCard, setIndexCard] = React.useState<number>();

  const dummyComment = [
    {
      name: "Fiky nih",
      message: "Yawis mbok",
      tanggal: "24-April-2020",
    },
    {
      name: "Fiky nih",
      message: "Yawis mbok",
      tanggal: "24-April-2020",
    },
    {
      name: "Fiky nih",
      message:
        "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggkjkhiuhuiiuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggkjkhiuhuiiuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggkjkhiuhuiiuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggkjkhiuhuiiuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      tanggal: "24-April-2020",
    },
    {
      name: "Fiky nih",
      message:
        "Yawis mbok gggggggggggggggggggggggg gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      tanggal: "24-April-2020",
    },
  ];

//   const handleShowComment = (index: number) => {
//     setIndexCard(index)
//     if (showComment && indexCard === index) {
//       setShowComment(false);
//     } else {
//       setShowComment(true);
//     }
//   };

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto gap-5 p-5">
      {dummyComment.map(({ name, message, tanggal }, index) => {
        return (
          <div
            key={index}
            className="flex w-full h-full bg-white p-2 rounded-sm gap-5"
          >
            <div className="flex items-start justify-center w-10 h-10">
              <Image
                src={defaultImage}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
                width={320}
                height={200}
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="flex w-full text-gray-500 text-[10px] md:text-[11px] gap-2 items-start justify-start">
                <span className="text-red-400 font-semibold">@{name}</span>
                {tanggal}
              </p>
              <p
                className={`${
                  showComment ? "line-clamp-none" : "line-clamp-1"
                }  w-full text-[12px] md:text-[14px] break-all`}
              >
                {message}
              </p>
              {/* {message.length > 100 && (
                <div className="flex w-full items-center justify-start mt-1">
                  <p
                    onClick={() => handleShowComment(index)}
                    className="font-semibold text-[11px] md:text-[13px] text-gray-500 hover:underline cursor-pointer"
                  >
                    {showComment ? "Baca Sekilas" : "Baca Selengkapnya..."}
                  </p>
                </div>
              )} */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
