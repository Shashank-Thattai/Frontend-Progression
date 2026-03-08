import React from 'react'
import { useDispatch } from 'react-redux';
import {increment} from '../slice'

const ReduxComponent3 = () => {
    var dispatcher = useDispatch();
    function handleclick(){
        dispatcher(increment())
    }
  return (
    <>
    
Component3 -
<button onClick={handleclick}>Increment Value</button>
    </>
  )
}

export default ReduxComponent3;