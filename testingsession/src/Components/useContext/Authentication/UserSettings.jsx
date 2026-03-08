import React from 'react'
import useAuth from './AuthContext';

const UserSettings = () => {
    const{user} = useAuth();
  return (
    <>
        In my userSettings my email is {user.email}
    </>
  )
}

export default UserSettings;