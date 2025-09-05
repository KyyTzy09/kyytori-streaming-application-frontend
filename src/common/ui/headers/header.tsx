"use client";

import { Button } from "@/common/shadcn/button";
import React, { ElementType } from "react";

interface HeaderProps {
  title: string;
  description : string
  actionText: string;
  action: () => void;
  Icon: ElementType;
}

export default function NavigationHeader({
  title,
  description,
  actionText,
  action,
  Icon,
}: HeaderProps) {
  return (
    <div className="w-full flex items-center justify-between mb-5 gap-3">
      <div className="flex flex-col items-start justify-center">
        <p className="text-red-500 font-semibold text-[16px] md:text-xl">{title}</p>
        <p className="text-white font-semibold text-[10px] md:text-sm">{description}</p>
      </div>
      <Button
        className="flex items-center justify-center bg-red-500 hover:bg-red-300 text-white font-semibold transition duration-700"
        onClick={action}
      >
        {actionText}
        <Icon />
      </Button>
    </div>
  );
}
