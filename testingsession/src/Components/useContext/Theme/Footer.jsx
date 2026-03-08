import React from 'react'
import useTheme from './ThemeContext';

const Footer = () => {
    const{Theme} = useTheme(); 
  return (
    <>

    <div> This is my footer</div>
    <div style={{height:100,width:100,margin:10,color:Theme,border:1}}></div>
    
    
    </>
  )
}

export default Footer;