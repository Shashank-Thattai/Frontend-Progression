import React, { useState } from 'react'
import "./ReadingData.css"

const ReadingDataFromInputElements = () => {
    const[userName,setUserName] = useState("")
    const[userAge,setUserAge] = useState(0)
    const[usergender,setUserGender] = useState('')
    const[countryName,setCountryName] = useState('')

    //function handleUserAgeChange(event){ setUserAge(event.target.value)}



    function handleUserNameChange(event){
        setUserName(event.target.value)
    }

    function handleGenderChange(gender)
    {
        setUserGender(gender)

        
    }
    function handleCountryName(event){
        setCountryName(event.target.value)
    }
  return (
   <>
   <ul className='userRegistrationPage'>
    <li className='title'>
        User Registration Page

    </li>
    <li>
        <input type ="text" placeholder='Enter your userName' onChange={handleUserNameChange}/>
    </li>
    <li>
        <input type='number' placeholder='Enter your age' onChange={(event)=>{setUserAge(event.target.value)}}/>
    </li>
    <li>
        Gender:
        <input name ="gender" type ="radio" value="male" onChange={()=>{handleGenderChange('male')}}/>Male
        <input name = "gender" type='radio' value="female" onChange={()=>handleGenderChange('female')}/> Female
    </li>
    <li>
        Location:
        <select onChange={handleCountryName}>
            <option value ="India">India</option>
            <option value ="Usa">USA</option>
            <option value ="Japan">Japan</option>
            <option value ="China">China</option>
        </select>
    </li>
    <li>
        <button>Save Details</button>
    </li>
   </ul>

   <hr/>
   <ul>
    <li>
        user name is - {userName}<br/>
        user age is -{userAge}<br/>
        user gender is -{usergender}<br/>
        country name is -{countryName}
    </li>
   </ul>
   </>
  )
}

export default ReadingDataFromInputElements;