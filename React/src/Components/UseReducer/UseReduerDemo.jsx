import React, { useState } from 'react'

const UseReduerDemo = () => {
    /*function arrayreducer(){
        var data =[2,3,45,674,363,3]
        console.log(data)
        var result = data.reduce((accumlator,currentvalue)=>{return accumlator*currentvalue},10);
        console.log(result)

        //find,filter,sort,map,reduce
    }
    arrayreducer()*/

    const[username,setUsername] =useState('')
    const[age,setAge] =useState(0)

    function handleNameChange(event){
        setUsername(event.target.value)
    }
    function handleAgeChange(event){
        setAge(event.target.value)
    }
    function showData(){
        var data = {username,age}
        console.log(data)
    }
  return (
    <>
        <h3>User Registration Page</h3>
        <ul>
            <li>
                <input type='text' placeholder='Enter username' value={username} onChange={handleNameChange}></input>
            </li>
            <li>
                <input type='age' placeholder='Enter userage' value={age} onChange={handleAgeChange}></input>
            </li>
            <li>
                <button onClick={showData}>show data</button>
            </li>
        </ul>
    </>
  )
}

export default UseReduerDemo;