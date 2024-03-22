"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export default function Item2() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


const testimonials = [
  {
    quote:
      "Harmonic Horizon's music takes me on a journey every time I listen. It's like a beautiful escape from reality.",
    name: "Sarah Johnson",
    title: "Fan",
  },
  {
    quote:
      "The melodies of Harmonic Horizon resonate deeply within me. Their music speaks to my soul.",
    name: "Michael Smith",
    title: "Loyal Listener",
  },
  {
    quote: "Listening to Harmonic Horizon's latest album feels like magic. Each track is a masterpiece.",
    name: "Emily Garcia",
    title: "Music Enthusiast",
  },
  {
    quote:
      "Harmonic Horizon's music has a unique ability to uplift and inspire. I'm grateful for their artistry.",
    name: "David Brown",
    title: "Devoted Fan",
  },
  {
    quote:
      "Every time I attend a Harmonic Horizon concert, I'm blown away by the energy and passion they bring to the stage.",
    name: "Jessica Lee",
    title: "Concertgoer",
  },
];

