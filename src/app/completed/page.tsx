"use client";

import React from "react";

export default function CompletedAnimePage() {
  return (
    <div className="w-full flex flex-col p-3 md:p-5 items-center gap-5">
      <section className="w-full flex items-center justify-between">
        <p className="text-white text-lg md:text-xl font-semibold p-1">
          Anime <span className="text-red-500 font-mono">Completed</span>
        </p>
      </section>
    </div>
  );
}
