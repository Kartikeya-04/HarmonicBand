"use client";
import React ,{useState} from "react";
import { Button } from "./ui/moving-border";

import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
export default function MovingBorderDemo() {

  const [textValue, setTextValue] = useState('');
  const [isCopied, setCopied] = useClipboard(textValue);



  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const handleChange = () => {
    setTextValue(transcript);

  };
  const start = () => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
      console.log('working');
    } else { 
      console.error("Speech recognition is not supported in this browser.");
    }
  }
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        onClick={start}
      >
        RECORD
      </Button>
    </div>
  );
}
