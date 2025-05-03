import React from 'react'
import {Link} from "react-router-dom"
import { useForm} from "react-hook-form"
const Login = () => {

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className=' dark:bg-slate-900 dark:text-white'>
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}>
    <Link  to ="/" className='btn-btn-sm btn-circle btn-ghost absolute right-2 top-2'> x
    </Link>
    <h3 className="font-bold text-lg">Login</h3>
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
    placeholder='Enter your password' {...register("password", { required: true })}className='w-80 px-3 py-1 border rounded-md outline-none'/>
    <br/>
       {errors.password && <span className='text-sm  text-red-500'>This field is required</span>}
  </div>
  {/* {Button} */}
  <div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-purple-700 duration-700'>Login</button>
       <p>Not Registered?</p> 
       <Link  to="/signup"className='underline text-blue-500 cursor-pointer'> Signup</Link>
  </div>
  </form>
  </div>
</dialog>
    </div>
  )
}

export default Login