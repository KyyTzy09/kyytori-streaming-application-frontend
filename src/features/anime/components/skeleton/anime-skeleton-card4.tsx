import React from "react";

export default function AnimeSkeletonCard4() {
  return (
    <div className="w-full h-[300px] md:h-[400px] flex gap-2 overflow-x-auto scrollbar-hide">
      <div className="w-40 md:w-[200px] h-full shrink-0 bg-gray-500 animate-pulse"></div>
      <div className="grid grid-rows-2 grid-flow-col h-full gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
          return (
            <div
              key={item}
              className="w-40 md:w-[200px] bg-gray-500 animate-pulse"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
