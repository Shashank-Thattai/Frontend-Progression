import { useState } from "react"

 export  function useCounterHook(initialValue = 0){
    

    const[counter,setCounter] = useState(initialValue)
    const increment =()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        setCounter(counter-1)
    }

    return {counter,increment,decrement}
}

//fetch("url").then((res)=>res.json()).then((data)=>{
    
//})