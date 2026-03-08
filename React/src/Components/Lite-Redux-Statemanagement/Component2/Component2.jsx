import React from 'react'
import { UserDataContext,useUserData,useUserDispatcher } from '../common';
import { useContext } from 'react';

const Component2 = () => {
    var data = useUserData();
    var dispatch = useUserDispatcher();

    function handleUpdateAge(){
        dispatch({type:'change',payload:{userName: "krish",age: 30}});
    }
  return (
    <>
    
    <hr/>
    <br/>
        Component 2 - {data.userName}
         {data.age}
         -<button onClick={handleUpdateAge}> Update Age </button>
    <hr/>
    <br/>
    </>
  )
}

export default Component2;