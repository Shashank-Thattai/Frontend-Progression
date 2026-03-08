import React, { useRef } from 'react'

const Demo_Dom = () => {
    const nameRef = useRef(null)
    const ageRef = useRef(null)

    function handleFocus(){
        nameRef.current.focus();
        
    }
    function resetf(){
        console.log(nameRef.current.value)
        nameRef.current.value = "";
        ageRef.current.value = 0;
    }
  return (
    <>
        <h2>Demo of useRef hook -Accessing DOM elements</h2>
        <ul>
            <li>
                <input type='text' placeholder='user name' ref={nameRef}></input>
            </li>
            <li>
                <input type='text' placeholder='user age' ref={ageRef}></input>
            </li>
            <li>
                <button onClick={handleFocus}>GetFocus</button>
                <button onClick={resetf}>Reset</button>
            </li>
        </ul>
    </>
  )
}

export default Demo_Dom;