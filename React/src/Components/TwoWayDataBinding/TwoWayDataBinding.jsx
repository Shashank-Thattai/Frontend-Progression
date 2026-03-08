import React, { useState } from 'react'


//How to achieve two way data binding with event handling
const TwoWayDataBinding = () => {
    var userName = "teena";//One Way Data Binding
    const[userAge,setUserAge]=useState(0)
    function AgeChange(event){
        setUserAge(event.target.value)
    }

  return (
    <>
    <h1>Two Way Data Binding</h1>
    <div>User name is {userName}</div>
    <input type ="text" 
    placeholder='User Age'
    value={userAge} 
    onChange={AgeChange}></input>
    User age is -{userAge}
    </>
  )
}

export default TwoWayDataBinding;