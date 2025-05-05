import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Login from './Login'
import axious from "axios"
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast'
const Signup = () => {
    const {
      register,
      handleSubmit,
     
      formState: { errors },
    } = useForm()

    const navigate= useNavigate()
    const onSubmit = async (data) => {
      const userInfo={
   fullname:data.fullname,
   email:data.email,
   password:data.password
      }
    await axious.post("http://localhost:4001/users/signup",userInfo) //userinfo isliye kyo ki hame api may store krna hai
     .then((res)=>{
      console.log(res.data)
      if(res.data){ // if resdata is aviable then
 
        toast.success("Sign up Success")
        navigate("/")
          
      }
      //local stoage may res.data ko store kr rhe hai taki hum usay courses component may ue kr sakhte hai 
      localStorage.setItem("Users",JSON.stringify(res.data.user))
     }).catch((err)=>{
         if(err.response){
          console.log(err)
        
          toast.error("Error" + err.response.data.message)
         }
     })
    };
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
    <input type="text"
    placeholder='Enter your Full Name'  {...register("fullname", { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none'/>
    <br/>
      {errors.fullName && <span className='text-sm  text-red-500'>This field is required</span>}
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
