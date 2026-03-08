import React from 'react'
import useNotification from './NotificationContext';

const NotificationList = () => {
    const{notifications,dismissNotification} = useNotification();
  return (
    <>
    {

        notifications.map((items)=>{
            return (
                <div key={items.id}>
                    {items.msg}
                    <button onClick={()=>{dismissNotification(items.id)}}>dismiss</button>

                </div>
            )

                
        })
    }

   


    </>
  )
}

export default NotificationList;