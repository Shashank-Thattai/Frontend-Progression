import React from 'react'
import useTheme from './ThemeContext';

const Card = () => {
    const {Theme} = useTheme();
  return (
    <>
    
    <div style={{color:Theme}}> This is my card </div>
    </>
  )
}

export default Card;