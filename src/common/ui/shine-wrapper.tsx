import React from "react";

interface ShineEffectWrapperProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export const ShineEffectWrapper: React.FC<ShineEffectWrapperProps> = ({
  children,
  className = "",
  duration = 3,
}) => {
  return (
    <div
      className={`shine-wrapper relative overflow-hidden rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};
