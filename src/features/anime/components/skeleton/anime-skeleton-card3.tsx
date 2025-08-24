import React from "react";
import ShineEffectWrapper from "../../../../common/ui/shine-wrapper";

export default function Card3Skeleton() {
  return (
    <div className="w-full gap-2 sm:gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {Array.from({ length: 14 }).map((_, index) => {
        return (
          <div key={index} className="w-full h-full flex flex-col gap-1">
            <ShineEffectWrapper className="w-full h-[165px] sm:h-44 md:h-56 lg:h-60 bg-gray-600 animate-pulse"></ShineEffectWrapper>
          </div>
        );
      })}
    </div>
  );
}
