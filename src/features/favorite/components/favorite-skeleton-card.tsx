import React from "react";

export default function FavoriteSkeletonCard() {
  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
        return (
          <div
            key={item}
            className="w-full h-auto items-center justify-between flex flex-col gap-2"
          >
            <div className="w-full h-52 sm:h-64 bg-gray-500 animate-pulse rounded-sm"></div>
            <div className="w-full h-12 bg-gray-500 animate-pulse rounded-sm"></div>
          </div>
        );
      })}
    </div>
  );
}
