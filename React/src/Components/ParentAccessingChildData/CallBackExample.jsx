import React, { useState } from 'react'
import ChildComponent2 from './ChildComponent2';

const CallBackExample = () => {
    const[satlength,setSatLength] = useState(0)
    function handleChildData(data){
        console.log("data recieved from child is",data)
        setSatLength(data)
    }
  return (
    <>
    <div>
        ParentAccessingChildData component
        Total Items:: {satlength}
        <hr/>
        <ChildComponent2 parentCallBack ={handleChildData}/>
    </div>
    </>
  )
}

export default CallBackExample;

