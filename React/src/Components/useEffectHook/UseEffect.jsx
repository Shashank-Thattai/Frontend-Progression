import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    console.log("component got invoked ")
    const[theme,setTheme]=useState('red')
    const[bgcolor,setBgColor] =useState('yellow')
    

    
    useEffect(()=>{
        //look into this
        console.log("useEffect got invoked")
        if(theme != 'red')
        {
            document.querySelector('#container').style['background-color'] = 'black'
        }
        document.querySelector('#container').style.color =theme;
        
    },[theme]);

    useEffect(()=>{
        console.log("second use effect")
        document.querySelector('#container').style['background-color'] =bgcolor;
    },[bgcolor])

    console.log("after useEffect")
  return (
   <>
   <select onChange={(event)=>{setTheme(event.target.value)}} value={theme}>
        <option value='red'>Red</option>
        <option value='green'>green</option>
        <option value='blue'>blue</option>
        <option value='yellow'>yellow</option>
   </select>
  Background Color <select onChange={(event)=>{setBgColor(event.target.value)}}>
        <option value='red'>Red</option>
        <option value='green'>green</option>
        <option value='blue'>blue</option>
        <option value='yellow'>yellow</option>
   </select>
   <div id='container'>Demonstrating use Effect </div>
   <div>{theme}</div>
   </>
  )
}

export default UseEffect;