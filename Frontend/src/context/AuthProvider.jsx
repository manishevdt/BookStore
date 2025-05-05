import React ,{Children, createContext, useContext, useState}from 'react'

export const AuthContext = createContext()

// childern mtlb sare components jyse navbar etc
export default function AuthProvider({children}) {
    //local stprage se data ky kr ana
    const initalAuthUser = localStorage.getItem("Users");
    const [authUser ,setAuthUser] = useState(
    //agar intialauthuser hai toh usko rako nhi toh undefined rakho

initalAuthUser?JSON.parse(initalAuthUser):undefined)
return(
    <AuthContext.Provider value={[authUser,setAuthUser]}> 
        {children}    
    </AuthContext.Provider>
)
  
}

// making custom hook
export const useAuth = ()=>useContext(AuthContext);



//IS pure ko hum isliye banaye ha taki hum ko pura access kr paye globally

