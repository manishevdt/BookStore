


import Signup from "./components/Signup"
import Contacts from "./contact/Contacts"
import Courses from "./courses/Courses"
import Home from "./home/Home"

import{ Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
<h1 className="dark:bg-slate-900 dark:text-white ">
{/*      
      <Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/contact" element={<Contacts/>}/>
   
  
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
</h1>
</>
   
  )
}

export default App
