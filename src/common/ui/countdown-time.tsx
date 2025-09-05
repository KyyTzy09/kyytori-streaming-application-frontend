"use client";

import React from "react";

interface CountDownTimeProps {
  realeaseTimeStamp: string;
}

export default function CountDownTime({
  realeaseTimeStamp,
}: CountDownTimeProps) {
  const [timeleft, setTimeLeft] = React.useState<string>("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const diff = Number(realeaseTimeStamp) - now;

      if (diff <= 0) {
        setTimeLeft("Sudah Rilis");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (60 * 60 * 24));
      const hours = Math.floor((diff % (60 * 60 * 24)) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      setTimeLeft(
        `${days > 0 ? days + "h " : ""}${hours}j ${minutes}m ${seconds}d`
      );
    }, 1000);
  }, [realeaseTimeStamp]);

  return (
    <p className="text-white text-[8px] sm:text-[10px] md:text-[12px] lg:text-sm font-semibold flex items-center justify-center transition duration-700">
      {timeleft}
    </p>
  );
}
