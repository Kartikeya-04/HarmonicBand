'use client'
import React,{useState,useEffect} from 'react';
import Button from '@/app/components/Button'
import Button2 from '@/app/components/Button2'
import Button3 from '@/app/components/Button3'
import './App.css'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
function Next2() {
    const [textValue, setTextValue] = useState('');
  const [isCopied, setCopied] = useClipboard(textValue);

  console.log('Text value:', textValue);
    console.log('Copy status:', isCopied);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const handleChange = () => {
    setTextValue(transcript);

  };

  

  console.log(transcript !== undefined ? 'Value is ' + transcript : 'Value is undefined');


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-500 flex-col dark">
<div className='m-8 text-lg font-extrabold head md:text-md sm:text-sm'>
    SING YOUR SONG HERE !
</div>
<div className='m-9' 

>
  <textarea
          style={{ resize: 'both' }}
          className="w-full md:w-4/6 lg:w-[45vw] h-40 md:h-60 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 focus:outline-none text-white"
          onClick={handleChange}
          value={transcript}
          placeholder='Sing here ...  and Tap to Copy !'
         
       />
      


 
 
 
</div>
          
      <div className="flex justify-center items-center flex-shrink buttonHolder gap-2">

          <div>
          <Button/>
          </div>
          <div>
   
          <Button2/>
          </div>
          <div>
            <Button3/> 
            </div>
          <div>
          <button className='bg-black p-3 m-3 rounded-md text-white' onClick={setCopied}>{isCopied ? "Again Copy 👍" : "Tap and Copy! 👎"}</button>

          </div>

<div>
  
  </div>


        </div>
    </div>
  )
}

export default Next2