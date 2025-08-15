import ShineEffectWrapper from "@/common/ui/shine-wrapper";
import React from "react";

export default function FavoriteSkeletonCard() {
  return (
    <div className="w-full h-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
        return (
          <div
            key={item}
            className="w-full h-auto items-center justify-between flex flex-col gap-2"
          >
            <ShineEffectWrapper className="w-full h-48 sm:h-52 md:h-64 bg-gray-600 animate-pulse rounded-sm"></ShineEffectWrapper>
            <ShineEffectWrapper className="w-full h-12 bg-gray-600 animate-pulse rounded-sm"></ShineEffectWrapper>
          </div>
        );
      })}
    </div>
  );
}
