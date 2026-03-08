import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { updateName } from '../slice';

const ReduxComponent1 = () => {
  const count = useSelector((state)=> state.counter.value)
    //const name = useSelector((state)=> state.counter.counter)
    const userName = useSelector((state)=>state.counter.name)
    var dispatcher = useDispatch();

    function handleName(){
      // If i need to make a api call make the api call here and then add the response into the dispatch below
     
      dispatcher(updateName({name : "prasad"})); // (state, {payload: Prasad} )

    }

  return (
    <>
    {count} and {userName}
    <button onClick={handleName}>Update userName</button>
    </>
  )
}

export default ReduxComponent1;