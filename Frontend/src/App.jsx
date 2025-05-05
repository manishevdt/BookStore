


import Abouts from "./about/Abouts"
import Signup from "./components/Signup"
import Contacts from "./contact/Contacts"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider';

import{ Navigate, Route, Routes } from 'react-router-dom'

function App() {

  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <>
<div className="dark:bg-slate-900 dark:text-white ">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/contact" element={authUser?<Contacts/>:<Navigate to="/signup"/>}/>
        <Route path="/about" element={<Abouts/>}/>
   
  
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
</div>
</>
   
  )
}

export default App
