import React from 'react'
import { useCounterHook } from './counterCustomHook';

const IncrementAndDecrement = () => {
    //var CounterValue = 0;
    var{counter,increment,decrement} = useCounterHook(10);
  return (
    <>
    counter -  {counter}
    <hr/>
    <br></br>
    <button className='frstbutton' onClick={increment}>Increment</button>
    <button className='sndbutton' onClick={decrement}>Decrement</button>
    
    </>
  )
}

export default IncrementAndDecrement;