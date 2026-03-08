import React from 'react'

let EventHandlingDemo = () => {

    function sample(event){
        //event is a predefined object that gets created automatically everytime an action happes. It holds all the metaData or extra information(type of event, target element,position where an event occured) of the event being generated
        console.log("hello")
    }

    function dojob(name)
    {
        console.log("name is"+ name)
    }
  return (
    <>
    <div>EventHandlingDemo</div>
    <button onClick={sample}>Click Here</button>

    <button onClick={()=>{console.log("I am second handler")}}>
        Second click
    </button>
    {/*<button onClick={dojob("krish")}>dojob</button>*/}
    <button onClick={()=>{dojob("krish")}}>Dojob</button>

    </>
  )
}

export default EventHandlingDemo