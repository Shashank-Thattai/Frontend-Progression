import React from 'react'
import useAuth from './AuthContext';

const NavBar = () => {
    const {user,logout} = useAuth();
  return (
   <>
   <div> This is m nav bar</div>
    {user ? `Welcome ${user.name}` :  'please log in'}
    <button onClick={logout}>Logout</button>
    
   </>
  )
}

export default NavBar;