import React from "react";
import ShineEffectWrapper from "../shine-wrapper";

export default function CardSkeleton() {
  return (
    <div className="w-full gap-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => {
        return (
          <div key={num} className="w-full h-full flex flex-col gap-1">
            <ShineEffectWrapper className="w-full h-40 md:h-60 bg-gray-600 animate-pulse"></ShineEffectWrapper>
            <ShineEffectWrapper className="w-full h-5 bg-gray-600 animate-pulse"></ShineEffectWrapper>
          </div>
        );
      })}
    </div>
  );
}
