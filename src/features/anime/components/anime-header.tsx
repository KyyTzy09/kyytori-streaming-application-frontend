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
      <p className="text-white font-semibold text-[14px] md:text-xl">
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
