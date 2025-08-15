import React from "react";
import ShineEffectWrapper from "../shine-wrapper";

interface imageSkeletonProps {
  width: number | string;
  height: number | string;
}

export default function ImageSkeleton({ width, height }: imageSkeletonProps) {
  return <ShineEffectWrapper className={`bg-gray-600 w-${width} h-${height} animate-pulse`}></ShineEffectWrapper>;
}
