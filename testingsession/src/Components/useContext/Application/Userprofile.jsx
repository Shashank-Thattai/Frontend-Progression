import React from 'react'
import useApp from './AppContext';
const Userprofile = () => {
    const{user} = useApp();
    console.log('UserProfile rendered')
  return (
    <>
    <div> This is my user Profile</div>
    {user.name} + {user.email}
     
    </>
  )
}

export default Userprofile;