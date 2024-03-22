"use client";
import React from "react";
import { WavyBackground } from "@/app/components/ui/wavy-background";

export default function Next3() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 mt-[50px]">
      <div>
      <div className="m-3">
      <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center">
        Compose Your Own Music !

      </p></div>
      <div className="m-4 mt-8">
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Welcome to <span className="text-white text-lg font-bold">HARMONIC HORIZON</span> , your ultimate destination for crafting your own musical masterpieces online.
Unlock your creativity and express yourself through music with MelodyCraft intuitive song composition platform.
Whether you are creating soulful melodies, catchy beats, or heartfelt lyrics, MelodyCraft offers a seamless and customizable experience.
      </p></div>
      </div>
    </WavyBackground>
  );
}
