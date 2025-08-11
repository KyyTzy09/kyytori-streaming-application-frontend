import { Button } from "@/common/shadcn/button";
import { Separator } from "@/common/shadcn/separator";
import React from "react";

export default function FavoriteCommentSection() {
    return (
    <section className="flex flex-col md:hidden w-full items-center">
      <div className="w-full flex flex-col items-center gap-2 justify-center">
        <Separator className="border-white border mx-5" />
        <div className="w-full flex items-center justify-center gap-1">
          <Button className="w-1/2 flex gap-2 items-center justify-center font-semibold text-sm hover:bg-red-500 transition duration-700">
            Favorit
          </Button>
          <Button className="w-1/2 flex gap-2 items-center justify-center font-semibold text-sm bg-red-500 hover:bg-red-500 transition duration-700">
            Komentar
          </Button>
        </div>
        <Separator className="border-white mx-5" />
      </div>
    </section>
  );
}
