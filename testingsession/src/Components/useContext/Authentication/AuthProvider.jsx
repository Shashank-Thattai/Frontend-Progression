import React, {useState } from 'react'
import { UserContext } from './AuthContext'

const AuthProvider = ({children}) => {
    const[user,setuser] = useState(null)
    function login(userData){
        setuser(userData)
    }
    function logout(){
        setuser(null)
    }
  return (
  <>
  <UserContext value={{user:user,login:login,logout:logout}}>
    {children}
  </UserContext>
    
  </>
  )
}

export default AuthProvider;