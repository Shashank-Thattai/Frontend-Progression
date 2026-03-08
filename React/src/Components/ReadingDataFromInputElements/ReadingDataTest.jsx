import React, { useState } from 'react'

const ReadingDataTest = () => {
    const[userName,setUserName] = useState('')
    const[age,setAge] = useState(0)
    const[gender,setGender] =useState('')
    const[country,setCountry] = useState('india')
    function handleName(event){
        setUserName(event.target.value)
    }
    function handleGender(gender){
        setGender(gender)
    }
    function handleCountry(event){
        setCountry(event.target.value)

    }
  return (
    <>
        <input type="text" placeholder='enter your username here' onChange={handleName}></input>
        <h4>User name is {userName}</h4>

        <input type='number' placeholder='enter your age here' onChange={(event)=>setAge(event.target.value)}></input>
        <h4>Age is {age}</h4>

        <input name='gender' type='radio' value="male" onChange={()=>{handleGender('male')}}/>Male
        <input name='gender' type='radio' value="female" onChange={()=>{handleGender('female')}}/>Female
        <h4>Gender is {gender}</h4>

        <select onChange={handleCountry}>
            <option value='india'>India</option>
            <option value='USA'>USA</option>
            <option value='Japan'>Japan</option>
            <option value='China'>China</option>
        </select>
        <h4>My Countey is {country}</h4>

    </>
  )
}

export default ReadingDataTest