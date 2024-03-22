"use client";
import React from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export default function Next1() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Compose Your Own Music !
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10 mt-8">
  
        Unleash your inner musician and lyricist on our Song Composer Page. Here, creativity knows no bounds as you dive into a world of melodies and verses.
Embark on a musical journey like never before, where every click and keystroke brings you closer to realizing your artistic vision.
        </p>
        {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
      </div>
      <BackgroundBeams />
    </div>
  );
}
