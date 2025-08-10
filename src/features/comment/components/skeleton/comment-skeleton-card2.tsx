import React from "react";

export default function CommentSkeletonCard2() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.from({ length: 15 }).map((_, item) => {
        return (
          <div className="w-full flex items-center gap-4 p-4 relative">
            <div className="flex justify-between w-20 h-20">
              <div className="rounded-md min-w-[80px] h-full bg-gray-500 animate-pulse"></div>
              <div className="absolute bottom-1 left-16 rounded-full w-10 h-10 bg-gray-500 animate-pulse"></div>
            </div>
            <div className="w-full gap-1 flex flex-col h-full">
              <div className="w-40 h-3 bg-gray-500 animate-pulse rounded-sm"></div>
              <div className="w-full h-5 bg-gray-500 animate-pulse rounded-sm"></div>
              <div className="w-full h-4 bg-gray-500 animate-pulse rounded-sm"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
