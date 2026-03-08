import React, { useState } from 'react'
import { UserContext } from './ThemeContext'
import Header from './Header'
import Card from './Card'
import Footer from './Footer'

const ThemeProvider = () => {
    const[light,setLight] = useState('black')
    function toggleLight(){
        setLight(light === 'black'? 'white':'black')
    }
  return (
    <>
        <UserContext value={{Theme:light,toggle:toggleLight}}>
            <Header/>
            <Card/>
            <Footer/>
        </UserContext>
    </>
  )
}

export default ThemeProvider;