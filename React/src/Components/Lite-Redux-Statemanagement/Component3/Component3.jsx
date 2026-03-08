
import React, {  } from 'react'
import {  useUserDispatcher, UserDataContext, useUserData } from '../common';

const Component3 = () => {
    
    var data = useUserData();
    var dispatch = useUserDispatcher();



    function handleButtonClick(event){
        dispatch({type:'increment'})
    }
  return (
    <>
    
    <hr/>
    <br/>
        Component 3 - {data.userName}<br></br>
                        {data.age}
         
         <button onClick={handleButtonClick}>Increment</button>
    <hr/>
    <br/>
    </>
  )
}

export default Component3;