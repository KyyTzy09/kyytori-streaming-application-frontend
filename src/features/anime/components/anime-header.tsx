import Link from "next/link";
import React from "react";

interface AnimeHeaderProps {
  front: string;
  back: string;
  url: string;
  linkText: string;
}

export default function AnimeHeader({
  front,
  back,
  url,
  linkText,
}: AnimeHeaderProps) {
  return (
    <div className="w-full flex items-center justify-between px-1">
      <p className="flex items-center justify-center gap-2 text-white font-semibold text-lg md:text-2xl">
        <span className="w-1 h-5 md:h-6 bg-gradient-to-b from-red-800 via-red-500 to-rose-300"></span>
        {front}{" "}
        <span className="text-red-500">
          <i>{back}</i>
        </span>
      </p>
      <Link
        href={url}
        className="bg-red-500 text-white p-2 rounded-sm font-semibold text-[10px] md:text-sm hover:bg-red-400 transition duration-700"
      >
        {linkText}
      </Link>
    </div>
  );
}
