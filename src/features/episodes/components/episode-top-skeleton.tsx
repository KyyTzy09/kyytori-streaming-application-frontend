import ShineEffectWrapper from "@/common/ui/shine-wrapper";
import React from "react";

export default function TopEpisodeSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return (
          <div
            key={item}
            className="flex items-center justify-between w-full h-40 md:h-60 gap-2 p-2"
          >
            <ShineEffectWrapper className="w-32 md:w-40 max-w-[25%] h-40 md:h-60 bg-gray-600 animate-pulse"></ShineEffectWrapper>
            <div className="flex flex-col items-start justify-start w-[75%] h-40 md:h-60 overflow-hidden gap-2">
              <ShineEffectWrapper className="w-28 h-6 md:h-8 bg-gray-600 animate-pulse"></ShineEffectWrapper>
              <ShineEffectWrapper className="w-full h-12 bg-gray-600 animate-pulse"></ShineEffectWrapper>
              <div className="w-full grid grid-cols-3 gap-2 overflow-y-auto">
                {[1, 2, 3].map((item) => {
                  return (
                    <ShineEffectWrapper
                      key={item}
                      className="flex py-1 px-2 h-8 md:h-10 bg-gray-600 animate-pulse"
                    ></ShineEffectWrapper>
                  );
                })}
              </div>
            </div>
            <div className="w-[10%] flex items-center justify-center h-full">
              <ShineEffectWrapper className="w-full h-10 md:w-16 md:h-16 bg-gray-600 animate-pulse"></ShineEffectWrapper>
            </div>
          </div>
        );
      })}
    </div>
  );
}
