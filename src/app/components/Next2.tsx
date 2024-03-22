'use client'
import React,{useState,useEffect} from 'react';
import Button from '@/app/components/Button'
import Button2 from '@/app/components/Button2'
import Button3 from '@/app/components/Button3'

import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
function Next2() {
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
  // const start=()=>{SpeechRecognition.startListening({continuous:true},{ language: 'en-IN' });}
  const start = () => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
      console.log('working');
    } else { 
      console.error("Speech recognition is not supported in this browser.");
    }
  }
  

  console.log(transcript !== undefined ? 'Value is ' + transcript : 'Value is undefined');


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-500 flex-col dark">
<div className='m-8'>
    SING YOUR SONG HERE !
</div>
<div className='m-9'>
  <textarea
          style={{ resize: 'both' }}
          className="w-full md:w-1/2 lg:w-[45vw] h-40 md:h-60 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 focus:outline-none"
          onClick={() => setTextValue(transcript)}
          value={transcript}
          readOnly
        >

  {/* {typeof transcript === 'string' && (
  <p>{transcript}</p>
)} */}

  {/* <p>{transcript}</p> */}

  </textarea>
  {/* <div onClick={()=>setTextValue(transcript)} className='bg-white m-12 w-'>
  <p>{transcript}.</p>

  </div> */}
</div>
      <div className="flex flex-row justify-center items-center space-x-4">
          
       
          <div>
            
          {/* <button className='bg-green-500 p-3 rounded-md m-3' onClick={start}>
            Record
          </button> */}
          <Button/>
          </div>
          <div>
          {/* <button className='bg-red-400 p-3 rounded-md m-3' onClick={SpeechRecognition.stopListening}>
            Stop
          </button> */}
          <Button2/>
          </div>
          <div>
            {/* <button className='bg-black p-3 m-3 rounded-md text-white' onClick={setCopied}>COPY {isCopied ? "Yes! 👍" : "Tap and Copy! 👎"}</button> */}
          <Button3/>
          </div>
        </div>
    </div>
  )
}

export default Next2