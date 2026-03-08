import React, { useState } from 'react'
import "./Cleanup.css"

const RefUsage_Cleanup = () => {
    const[showD,setShowD]=useState(false)
  return (
    <>
    <h2>RefUsage_Cleanup</h2>
    {
        showD &&
        <div className='DialogBox' ref={(node)=>{
            node.style.backgroundColor ="lightblue";
            console.log("Dialog box got mounted", node);
            return()=>{
                console.log("Dialog boc unmounted",node)
            }
        }}>
        Dialog box content
    </div>}
    <button onClick={()=>{setShowD(true)}}>Show dialog</button>
    <button onClick={()=>{setShowD(false)}}>Hide dialog</button>
   

    </>


  )
}

export default RefUsage_Cleanup;