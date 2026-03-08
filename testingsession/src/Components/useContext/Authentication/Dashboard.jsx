import React from 'react'
import UserSettings from './UserSettings';
import useAuth from './AuthContext';

const Dashboard = () => {
    const{user} = useAuth();

  return (
    <>
        
        <div> Hello my name is {user.name} and my email is this {user.email} </div>
        <UserSettings/>
    </>
  )
}

export default Dashboard;