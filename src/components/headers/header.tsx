"use client";

import { Button } from "@/common/shadcn/button";
import React, { ElementType } from "react";

interface DashboardHeaderProps {
  title: string;
  actionText: string;
  action: () => void;
  Icon: ElementType;
}

export default function DashboardHeader({
  title,
  actionText,
  action,
  Icon,
}: DashboardHeaderProps) {
  return (
    <div className="w-full flex items-center justify-between mb-5">
      <p className="text-red-500 font-semibold text-xl">{title}</p>
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
