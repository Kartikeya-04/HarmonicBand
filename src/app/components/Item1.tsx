"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/app/utils/cn";
// import sound1 from "/sound/sound1.mp3"
// import sound2 from "/sound/drum.wav"
// import sound3 from "/sound/flute.mp3"
// import sound4 from "/sound/guitar.mp3"
// import sound5 from '@/app/components/sound'

export default function BackgroundBoxesDemo() {

    // function playRandomSound() {
    //     const sounds = [
    //       sound1,
    //       sound2,
    //       sound3,
    //       sound4,
    //       sound5,
    //     ];
      
    //     const randomIndex = Math.floor(Math.random() * sounds.length);
      
    //     const audio = new Audio(sounds[randomIndex]);
      
    //     audio.play();
    //   }


  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        OUR MUSIC
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 p-3">
      Explore our catalog of original compositions and covers,<br/> spanning various genres from rock and pop to jazz and classical.<br/> Each piece is carefully crafted to evoke emotion, tell stories, and transport listeners on a journey through sound.
      </p>
    </div>
  );
}
