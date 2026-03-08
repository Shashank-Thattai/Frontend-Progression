import React from 'react'
import { useCounterHook } from './counterCustomHook';

const PlusandMinus = () => {
    var{counter,increment,decrement} = useCounterHook();
  return (
    <>
        Number is -{counter}
        <button className='plusbutton' onClick={increment}>Plus</button>
        <button className='minusbutton' onClick={decrement}> Minus</button>
    </>
  )
}

export default PlusandMinus;