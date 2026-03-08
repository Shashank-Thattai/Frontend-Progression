import React, { useReducer } from 'react'
//import { initialStateCounter } from './reduceStore';

 export var initialStateCounter ={
    counter: 0
}

function reducer(state,action){
switch(action.type){
    case 'inc':
        return {counter:state.counter+1}
    case 'dec':
        return {counter:state.counter-1}
}
}

const IncDecUseReducer = () => {
    const[state,dispatch] = useReducer(reducer,initialStateCounter)
   
  return (
    <>
        Incrementor Decrementor
        <br/>
        <b>{state.counter}</b>
        <button onClick={()=>{dispatch({type: 'inc'})}}>+</button>
        <button onClick= {()=>{dispatch({type: 'dec'})}}>-</button>
    </>
  )
}

export default IncDecUseReducer;