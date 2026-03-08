import React from 'react'
import { useContext } from 'react';
import { UserDataContext } from '../common';

const Component1 = () => {
    var userData = useContext(UserDataContext)
     function handleUpdateAge(){
        userData.age = 50;
    }
  return (
    <>
    
    <hr/>
    <br/>
        Component 1 - {userData.userName}
         {userData.age}
         -<button onClick={handleUpdateAge}> Update Age </button>
    <hr/>
    <br/>
    </>
  )
}

export default Component1;