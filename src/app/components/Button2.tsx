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
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        onClick={SpeechRecognition.stopListening}
      >
        STOP RECORDING
      </Button>
    </div>
  );
}
