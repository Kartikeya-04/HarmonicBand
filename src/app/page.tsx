'use client'
import Navbar from '@/app/components/Navbar'
import SpotlightPreview from '@/app/components/SpotlightPreview'
import GoogleGeminiEffectDemo from '@/app/components/hero-section'
import BackgroundBoxesDemo from '@/app/components/Item1'
import Item2 from './components/Item2'
import Footer from './components/Footer'
import Item4 from './components/Item4'
function page() {
  function playRandomSound() {
    const sounds = [
      'sound/drum.wav',
      'sound/flute1.wav',
      'sound/guitar1.wav',
      'sound/crash.mp3',
      'sound/snare.mp3',
      'sound/tom-1.mp3',

    ];
  
    const randomIndex = Math.floor(Math.random() * sounds.length);
  
    const audio = new Audio(sounds[randomIndex]);
  
    audio.play();
  }
  return (
    <div className='h-screen w-screen dark relative'>
      <Navbar/>
    
      <SpotlightPreview/>
    <GoogleGeminiEffectDemo/>
    <div className='mt-[-3rem]' onClick={playRandomSound}>
    <BackgroundBoxesDemo/>


    </div>
    <Item2/>
    <Footer/>

    </div>
  )
}

export default page