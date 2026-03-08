import React, { useState } from 'react'
import { UserContext } from './ConsoleContext'

const ConsoleProvider = ({children}) => {
    const[user] = useState({ name: 'Alex', email: 'alex@email.com' })
    

  return (
    <UserContext value={{user}}>
        {children}
    </UserContext>
    
  )
}

export default ConsoleProvider;