import React from "react";

export default function CommentSkeletonCard() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto gap-5 p-5">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <div key={index} className="flex w-full h-14 p-2 rounded-sm gap-5">
            <div className="w-10 h-10 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="flex flex-col w-full gap-2">
              <div className="w-48 h-4 bg-gray-500 rounded-sm animate-pulse"></div>
              <div className="w-full h-6 bg-gray-500 rounded-sm animate-pulse"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
