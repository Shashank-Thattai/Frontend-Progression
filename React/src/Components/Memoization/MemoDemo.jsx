import React, { useState } from 'react'

//Look into this memo

var Child = React.memo(({ value }) => { //0,1,2,3     0,1,2,3
    console.log("Child comp rendered" + new Date().toLocaleTimeString())
    return <b>Value from Child comp is - {value}</b>
},[])

const MemoDemo = () => {
    const[counter,setCounter] = useState(0);
    const[diffvalue,setDiffValue] = useState(0);
  return (
    <>
        <div>Memo</div>
        <div>Count Value -{counter}</div>
        
        <Child value={counter}></Child>
        <hr/>
        <div>Diff value -{diffvalue}</div>
        <Child value={diffvalue}></Child>
        <br/>

        

        <button onClick={()=>{setCounter(counter+1)}}>Increment count</button>

        <button onClick={()=>{setDiffValue(diffvalue+1)}}>Increment DiffValue</button>
        
    </>
  )
}

export default MemoDemo;