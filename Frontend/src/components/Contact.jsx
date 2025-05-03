import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm} from "react-hook-form"
const Signup = () => {
    const {
      register,
      handleSubmit,
     
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex  item-center justify-center mt-10 dark:bg-slate-900 dark:text-white '>
        <div  className="border-[2px] shadow-md p-5 rounded-md h-85 mt-12">
  <div className="model-box">
     <form onSubmit={handleSubmit(onSubmit)}>
    <h3 className="font-bold text-lg">Contact <span className='text-blue-500'>Us</span></h3>

    <div className='mt-4 space-y-2'>
    
    <span>Name</span>
    <br/>
    <input tpye="Name"
    placeholder='Enter your Full Name'  {...register("Full Name", { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none'/>
    <br/>
      {errors.FullName && <span className='text-sm  text-red-500'>This field is required</span>}
  </div>
  <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br/>
    <input tpye="email"
    placeholder='Enter your Email' {...register("email", { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none'/>
    <br/>
     {errors.email && <span className='text-sm  text-red-500'>This field is required</span>}
  </div>
  <div className='mt-4 space-y-2'>
    <span>Message</span>
    <br/>
    <input tpye="Message"
    placeholder='Message'{...register("message", { required: true })} className='w-80 h-10 px-3 py-1 border rounded-md outline-none'/>
    <br/>
    {errors.message && <span className='text-sm  text-red-500'>This field is required</span>}
  </div>
  {/* {Button} */}
  <div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-700'>Submit</button>

   
  </div>
   </form>
  </div>
</div>

</div>
<div className='ml-11 mt-6 border-spacing-5'>
  <span className='text-blue-700 '>Our Office No. is :-</span> 1111111111
  <br/>
  <span className='text-blue-700 '>Our Head Office No. is :-</span> 0000000000
  <br/>
  <span className='text-blue-700 '>Our CEO No. is :-</span> 234567891
</div>
    </>
  )
}

export default Signup
