import React from 'react'
import useApp from './AppContext';

const NotificationBell = () => {
    const{notifications,addNotifications} = useApp();
  return (
    <>
        number of notifications are {notifications.length}
        <button onClick={() => addNotifications('New notification!')}>Add notifications</button>
    </>
  )
}

export default NotificationBell;