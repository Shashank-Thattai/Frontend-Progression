import React, { useEffect, useState } from 'react'

const UseEffectTest3 = () => {
    const[theme,setTheme] = useState('')
    const[color,setColor] = useState('')

    function ChangeTheme(event){
        setTheme(event.target.value)
    }
    function ChangeColor(event){
        setColor(event.target.value)
    }

    useEffect(()=>{
        
        document.getElementById('container').style['background-color'] = theme;
        document.getElementById('container').style['color'] = color;
    },[theme,color])
  return (
    <>
    <select onChange={ChangeColor}>
        <option value="black">Black</option>
        <option value="pink">Pink</option>
        <option value="teal">teal</option>
        <option value="white">White</option>
    </select>
    <select onChange={ChangeTheme}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="yellow">Yellow</option>
    </select>
    <div id='container'>Demonstrating useEffect</div>
    
    </>
  )
}

export default UseEffectTest3;