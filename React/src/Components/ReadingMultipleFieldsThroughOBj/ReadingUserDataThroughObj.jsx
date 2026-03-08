import React, { useState } from 'react'
//import '../ReadingDataFromInputElements/ReadingDataFromInputElements.css'

const ReadingUserDataThroughObj = () => {
    const[userDetails,setUserDetails] =useState({userName: '', age: 0})

    function handleUserNameChange(event){
        setUserDetails({ ...userDetails,userName:event.target.value,})
    }

    function handleValueChange(event,key){
        //Insted of key can use name:console.log(event.target.name)
        setUserDetails({...userDetails, [key]:event.target.value})

    }
    function handleAgeChange(event){
        setUserDetails({...userDetails,userAge:event.target.value})
    }

  return (
    <>
    <ul>
        <li>
            <input type ="text" name="userName" placeholder='enter your username' onChange={(event)=>{handleValueChange(event, 'userName')}}/>
        </li>
        <li>
            <input type='number' placeholder='enter your age' onChange={handleAgeChange}/>
        </li>
    </ul>
    <hr/>

    {JSON.stringify(userDetails)}
    </>
  )
}

export default ReadingUserDataThroughObj;