import React from 'react'
import useConsole from './ConsoleContext';
const Userprofile = () => {
    const{user} = useConsole();
    console.log('UserProfile rendered')
  return (
    <>
    <div> This is my user Profile</div>
    {user.name} + {user.email}
     
    </>
  )
}

export default Userprofile;