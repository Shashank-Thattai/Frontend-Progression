import React from 'react'
import useTheme from './ThemeContext';

const Header = () => {
    const {Theme,toggle} = useTheme();
    console.log(Theme)
  return (
   <>
   <div style={{backgroundColor:Theme}}>This is the header</div>
   <br/>
        {Theme} <button onClick={toggle}>Toggle Theme</button>
   </>
  )
}

export default Header;