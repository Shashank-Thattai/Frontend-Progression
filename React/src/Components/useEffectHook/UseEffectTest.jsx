import React, { use, useEffect, useState } from 'react'

const UseEffectTest = () => {
    const[count,setCount] = useState(0)
    const[isRunning,setIsRunning] =useState(true)
   
    useEffect(()=>{
        if(!isRunning) return
        const interval = setInterval(()=>{

            setCount(count =>count+1)
        },1000)
        return ()=>{
            /*Mount:
                Effect runs

                Dependency changes:
                Cleanup runs
                Effect runs again

                Unmount:
                Cleanup runs*/
            clearInterval(interval)
        }
        

    },[isRunning])
    
  return (
    <>
    count is {count}
    <button onClick={()=>{setIsRunning(true)}}>Start</button>
    <button onClick={()=>{setIsRunning(false)}}>Stop</button>

    
    
    </>
  )
}

export default UseEffectTest;