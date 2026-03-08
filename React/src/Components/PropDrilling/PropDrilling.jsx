




import React, { useState } from 'react'

const UseContextDemo = () => {
    const[assets] = useState({amount:300000})

  return (
    <>
    <h2>Parent container -{assets.amount}</h2>

    <ChildComponent1 assets ={assets}/>

    

    </>
  )
}

export default UseContextDemo;

function ChildComponent1({assets}){
    
    return(
        <>
        <div>
            <h2> Child -{assets.amount}</h2>
            <GrandChildComponent1 assets ={assets}/>

        </div>
        </>
    )
}
function GrandChildComponent1({assets}){
    return(
        <>
        <div>
            <h2> Grand Child -{assets.amount}</h2>
            <GreatGrandChildComponent1 assets ={assets}/>
        </div>
        </>
    )
}
function GreatGrandChildComponent1(props){
    return(
        <>
        <div>
            <h2> Great Grand Child -{props.assets.amount}</h2>
        </div>
        </>
    )
}