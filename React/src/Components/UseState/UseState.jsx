import React from 'react'
import { useState } from 'react';

let UseState = () => {
    var a = 90;//Static Memory
    //var userName = "teena"//Static Memory

    const[b,setBvalue] =useState(20); //State Memory
    const[userName,setUserName] = useState("Teena");
    
    
    setTimeout(()=> {
        a++
        console.log("value of a is" + a)
        setBvalue(100);
        //userName = 'Krish'
        setUserName("Krish")
        console.log("value of usename is"+ userName)
    },5000)
  return (
    <div>State Demo getting rendered -{a} - b value is {b} - My name is {userName}</div>
  )
}

export default UseState;