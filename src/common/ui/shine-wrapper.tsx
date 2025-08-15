import React from "react";

interface ShineEffectWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ShineEffectWrapper({
  children,
  className,
}: ShineEffectWrapperProps) {
  return (
    <div
      className={`shine-wrapper ${className}`}
    >
      {children}
    </div>
  );
}
