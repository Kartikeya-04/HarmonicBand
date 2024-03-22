'use client'
import Footer from '../components/Footer'
import Navbar from '@/app/components/Navbar'
import Next2 from '../components/Next2'
import Next1 from '../components/Next1'
import Next3 from '../components/Next3'

function page() {
  return (
    <div className='h-screen w-screen dark'>
        <Navbar/>  
{/* <Next1/> */}
<Next3/>

<Next2/>
{/* <div className='mt-[-3000px]'> */}
{/* <Next3/> */}
<Next1/>

{/* <div className='m-1'> */}
<Footer/>

{/* </div> */}
    </div>
  )
}

export default page