"use client";
import React ,{useState} from "react";
import { Button } from "./ui/moving-border";
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

export default function MovingBorderDemo() {





  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className=" dark:bg-red-600 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        onClick={resetTranscript}
      >
        RESET
      </Button>
    </div>
  );
}
