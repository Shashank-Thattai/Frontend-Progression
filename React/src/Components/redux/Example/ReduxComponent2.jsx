import React from 'react'
import { useSelector } from 'react-redux';

const ReduxComponent2 = () => {
    const counterValue = useSelector((state)=>state.counter.value)
  return (
    <div>ReduxComponent2 counter value is {counterValue}</div>
  )
}

export default ReduxComponent2;