"use client";

import { Button } from "@/common/shadcn/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/common/shadcn/hover-card";
import { Separator } from "@/common/shadcn/separator";
import { Profile } from "@/common/types/user";
import Image from "next/image";
import React from "react";
import { useGetProfile } from "../../hooks/profile-hook";
import { useRouter } from "next/navigation";
import ShineEffectWrapper from "@/common/ui/shine-wrapper";

interface ProfileHoverProps {
  children: React.ReactNode;
  user: Profile;
}

export default function ProfileHover({
  children,
  user: { userId, avatar, info, userName, createdAt },
}: ProfileHoverProps) {
  // Hooks
  const { data: profile } = useGetProfile();
  const router = useRouter();
  // Method
  const handleRoute = () => {
    if (profile?.data.id === userId) {
      router.push("/dashboard", { scroll: true });
    } else {
      router.push(`/profile/${userId}`, { scroll: true });
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        side="right"
        className="p-0 rounded bg-[#232323]/80 animate-glow"
      >
        <ShineEffectWrapper className="flex flex-col gap-2 relative overflow-hidden px-5 py-2">
          <div className="relative z-10 flex w-full h-full gap-2">
            <div className="w-1/4 h-full">
              <Image
                src={avatar}
                alt={userName || "nama"}
                width={300}
                height={300}
                className="w-12 h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col w-3/4 h-full">
              <p className="text-white font-semibold text-[12px] sm:text-sm">
                {userName}
              </p>
              <p className="text-gray-300 font-semibold text-[10px] line-clamp-1">
                {info}
              </p>
              <p className="text-gray-300 font-semibold text-[10px] line-clamp-1">
                Bergabung pada {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex w-full justify-end">
            <Button
              onClick={handleRoute}
              className="bg-red-500 hover:bg-red-300 cursor-pointer text-[10px]"
            >
              Kunjungi
            </Button>
          </div>
        </ShineEffectWrapper>
      </HoverCardContent>
    </HoverCard>
  );
}
