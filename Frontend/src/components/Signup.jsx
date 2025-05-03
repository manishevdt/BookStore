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
    <div className='flex  item-center justify-center  dark:bg-slate-900 dark:text-white '>
        <div  className="border-[2px] shadow-md p-5 rounded-md h-85 mt-12">
  <div className="model-box">
     <form onSubmit={handleSubmit(onSubmit)}>
    <h3 className="font-bold text-lg">Sign Up</h3>

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
    <span>Password</span>
    <br/>
    <input tpye="password"
    placeholder='Enter your password'{...register("password", { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none'/>
    <br/>
    {errors.password && <span className='text-sm  text-red-500'>This field is required</span>}
  </div>
  {/* {Button} */}
  <div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-purple-700 duration-700'>Sign Up</button>
       <p>Have Account?</p> 
       <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_1").showModal()}getElementById> Login</button>
       <Login/>
  </div>
   </form>
  </div>
</div>
</div>
    </>
  )
}

export default Signup
