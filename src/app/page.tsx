'use client'
import Navbar from '@/app/components/Navbar'
import SpotlightPreview from '@/app/components/SpotlightPreview'
import GoogleGeminiEffectDemo from '@/app/components/hero-section'
import BackgroundBoxesDemo from '@/app/components/Item1'
import Item2 from './components/Item2'
import Footer from './components/Footer'
import Item4 from './components/Item4'
function page() {
  return (
    <div className='h-screen w-screen dark relative'>
      <Navbar/>
    
      <SpotlightPreview/>
    <GoogleGeminiEffectDemo/>
    <div className='mt-[-3rem]'>
    <BackgroundBoxesDemo/>


    </div>
    <Item2/>
    {/* <div className='h-auto bg-black border border-white border-y-2 border-spacing-1 border-x-2'> */}
    <Footer/>

    {/* </div> */}
    </div>
  )
}

export default page