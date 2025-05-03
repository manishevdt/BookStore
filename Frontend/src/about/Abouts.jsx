import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import About from '../components/About'


function Abouts() {



  return (
   <>
   <Navbar/>
   <div className='min-h-screen  dark:bg-slate-900 dark:text-white '>
<About/>
   
   </div>
   
   <Footer/>
   </>
  )
}

export default Abouts
