import React from 'react'
import useNotification from './NotificationContext';

const NotificationBell = () => {
    const{notifications,addNotifications} = useNotification();
  return (
    <>
        number of notifications are {notifications.length}
        <button onClick={() => addNotifications('New notification!')}>Add notifications</button>
    </>
  )
}

export default NotificationBell;