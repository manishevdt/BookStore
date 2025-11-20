import React from 'react'
import BannerImg from "/banner.png";


const Banner = () => {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
   <div className='w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32'>
   <div className='space-y-12'>
   <h1 className='text-4xl font-bold'>Hello ,Wellcome here to learn somethong<span className='text-pink-500'>new everyday !!!</span> </h1>
   <p className='text-xl '>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, aut ex dignissimos explicabo sed atque aperiam ipsum harum perspiciatis debitis ea beatae illum, impedit vitae quas dolores rerum in molestiae?
   </p>
   
   <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
   </div>
   <button className="btn mt-6 btn-secondary">Secondary</button>
   </div>
   <div className='w-full md:w-1/2 mt-14 order-1'>
   <img src={BannerImg} className='w-92 h-92' alt=""/>
   </div>
   </div>
   </>
  )
}

export default Banner
