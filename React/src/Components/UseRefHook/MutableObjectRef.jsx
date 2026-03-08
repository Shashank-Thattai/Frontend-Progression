import React, { useEffect, useRef, useState } from 'react'

const MutableObjectRef = () => {
    const[counter,setCounter] = useState(0)
    const intervalRef = useRef(null)
    const [curdate,setCurDate] = useState( new Date().toLocaleTimeString())
    const IntervalTime = useRef(null)

    //console.log(intervalRef.current)

    
    useEffect(()=>{

        //mounting Logic
        IntervalTime.current = setInterval(()=>{
        setCurDate(new Date().toLocaleTimeString())
    },1000)

        return(()=>{
            //Look into this
            clearInterval(intervalRef.current); //unmounting logic | Cleanup funciton
            
        })
    },[])

    const handleStartTimer = ()=>{
          intervalRef.current= setInterval(()=>{
            setCounter(prev => prev+1);
            console.log(counter)
        },1000)
    }

     const handleStopTimer =()=>{
        clearInterval(IntervalTime.current)
    }

    
    


    const StopTime = () => {
        clearInterval(IntervalTime.current)
    }



  return (
    <>
    <div>{curdate}</div>
    <button onClick={StopTime}>StopTime</button>
    <button onClick={handleStartTimer}>Increment</button>
    <button onClick={handleStopTimer}>Stop</button>
    <div>{counter}</div>
    </>
  )
}

export default MutableObjectRef;