import React from 'react'
import useApp from './AppContext';

const NotificationList = () => {
    const{notifications,dismissNotification} = useApp();
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