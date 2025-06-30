"use client";

import { Button } from "@/common/shadcn/button";
import { User } from "@/common/types/user";
import { ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

interface PreviewImageProps {
  image: string;
  Width: number;
  height: number;
}

export default function PreviewImageModal({
  image,
  Width,
  height,
}: PreviewImageProps) {
  const [disablePan, setDisablePan] = React.useState<boolean>(true);
  return (
    <div className="absolute w-screen h-screen flex items-center justify-center bg-[#232323] z-10 top-0 bottom-0 left-0 right-0">
      <TransformWrapper
        onZoom={(era) => {
          if (era.state.scale > 1) {
            setDisablePan(false);
          } else {
            setDisablePan(true);
          }
        }}
        minScale={1}
        maxScale={2}
        panning={{ disabled: disablePan }}
        initialScale={1}
        doubleClick={{ mode: "zoomIn" }}
      >
        <TransformComponent
          wrapperClass="relative"
          contentClass={`${!disablePan ? "cursor-grab" : ""}`}
        >
          <Image
            src={image}
            alt={"All"}
            width={Width}
            height={height}
            draggable={false}
            className={`select-none cursor-grab object-contain max-h-screen max-w-screen`}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
