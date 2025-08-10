"use client";

import { Button } from "@/common/shadcn/button";
import { X } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

interface PreviewImageProps {
  isOpen: boolean;
  image: string;
  Width: number;
  height: number;
  setIsPreviewAction: (value: boolean) => void;
}

export default function PreviewImageModal({
  image,
  isOpen,
  Width,
  height,
  setIsPreviewAction,
}: PreviewImageProps) {
  const [disablePan, setDisablePan] = React.useState<boolean>(true);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed p-4 sm:p-10 w-full min-h-screen items-center justify-center bg-[#232323] z-50 top-0 bottom-0 left-0 right-0`}
    >
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
          <motion.img
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: 50 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={"All"}
            width={Width}
            height={height}
            draggable={false}
            className="select-none cursor-grab object-contain max-h-[90vh] max-w-[100vv] sm:max-w-[90vw]"
          />
        </TransformComponent>
        <div className="fixed flex items-center justify-center gap-2 top-1 right-1">
          <Button
            onClick={() => setIsPreviewAction(false)}
            className="group w-16 h-16 bg-transparent p-0 flex items-center justify-center hover:bg-transparent"
          >
            <X
              strokeWidth={4}
              className="w-full h-full text-white group-hover:text-red-500 transition duration-700"
            />
          </Button>
        </div>
      </TransformWrapper>
    </motion.div>
  );
}
