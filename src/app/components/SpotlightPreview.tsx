import React from "react";
import { cn } from "@/app/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import Item3 from "./Item3";

export default function SpotlightPreview() {
  return (
    <div className="absolute h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-col gap-14">
      <div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /></div>
      <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 m-9">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Harmonic Horizon <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-8">
        Welcome to Harmonic Horizon Official Website. <br/>
        Discover Our Music, Tour Dates, and More!🎵
          
        </p>
      </div>
      <div className="m-3 mb-9">
      <Item3/></div>
    </div>
  );
}
