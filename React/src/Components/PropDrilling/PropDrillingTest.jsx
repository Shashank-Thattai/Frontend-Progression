import React, { useState } from 'react'

const PropDrillingTest = () => {
    const[assets] = useState({amount:300000,total:1000000})
  return (
    <>
    <h2>Parent component</h2>
    <Child assets ={assets}/>

    
    </>
  )
}

export default PropDrillingTest;

function Child({assets}){
    return(
        <>
        <div>MY child component - {assets.amount}</div>
        <GrandChild assets = {assets}/>
        </>
    )

}

function GrandChild(props){
    return(
        <>
        <div>My GrandChild component - {props.assets.amount}</div>
        <GreatGrandChild assets = {props.assets}/>
        
        </>
    )
}
function GreatGrandChild({assets}){
    return(
        <>
        <div>My GreatGrandChild Component - {assets.amount}</div>
        
        </>
    )
}