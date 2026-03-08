import React, { useState } from 'react'
import { UserContext } from './NotificationContext';

const NotificationProvider = ({children}) => {
    const[notifications,setNotifications] = useState([])

    function addNotifications(msg){
        setNotifications(prev => [...prev, { id: Date.now(), msg }]);

    }
    function dismissNotification(id){
          setNotifications(prev => prev.filter(n => n.id !== id));

    }
  return (
    <UserContext value={{notifications,addNotifications,dismissNotification}}>
        {children}
    </UserContext>
    
  )
}

export default NotificationProvider;