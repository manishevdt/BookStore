import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser] = useAuth()

    const handleLogout=()=>{
        try{
        setAuthUser({
    ...authUser,user:null
      })
      localStorage.removeItem("Users")
      toast.success("Logout success")
             //local stoage may res.data ko store kr rhe hai taki hum usay courses component may ue kr sakhte hai 
            
             setTimeout(()=>{
              
                window.location.reload();
              
             
             },1000)
      window.location.reload();
        }catch(error){
      toast.error("Error:"+ error.message)
      setTimeout(() => {
        
      }, 2000);
        }
    }
  return (
    <div><button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}> LogOut
        </button></div>
  )
}

export default Logout