import React from "react";

interface imageSkeletonProps {
  width: number | string;
  height: number | string;
}

export default function ImageSkeleton({ width, height }: imageSkeletonProps) {
  return <div className={`bg-gray-500 w-${width} h-${height} animate-pulse`}></div>;
}
