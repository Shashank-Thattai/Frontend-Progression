import React, { useState } from 'react'
import { UserContext } from './AppContext'

const AppProvider = ({children}) => {
    const[user] = useState({ name: 'Alex', email: 'alex@email.com' })
    const[notifications,setNotifications] = useState([])

    function addNotifications(msg){
        setNotifications(prev => [...prev, { id: Date.now(), msg }]);

    }
    function dismissNotification(id){
          setNotifications(prev => prev.filter(n => n.id !== id));

    }
  return (
    <UserContext value={{user,notifications,addNotifications,dismissNotification}}>
        {children}
    </UserContext>
    
  )
}

export default AppProvider;