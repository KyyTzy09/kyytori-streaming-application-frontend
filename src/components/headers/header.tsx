"use client";

import { Button } from "@/common/shadcn/button";
import React, { ElementType } from "react";

interface DashboardHeaderProps {
  title: string;
  description : string
  actionText: string;
  action: () => void;
  Icon: ElementType;
}

export default function DashboardHeader({
  title,
  description,
  actionText,
  action,
  Icon,
}: DashboardHeaderProps) {
  return (
    <div className="w-full flex items-center justify-between mb-5">
      <div className="flex flex-col items-start justify-center">
        <p className="text-red-500 font-semibold text-sm md:text-xl lg:text-2xl">{title}</p>
        <p className="text-white font-semibold text-xs md:text-sm lg:text-lg">{description}</p>
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
