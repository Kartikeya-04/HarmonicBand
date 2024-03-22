"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/app/components/ui/text-reveal-card";

export default function Item3() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-20 rounded-2xl w-full">
      <TextRevealCard
        text="You have a Good Choice"
        revealText="So You are With Us !"
      >
        {/* <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle> */}
        {/* <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}
