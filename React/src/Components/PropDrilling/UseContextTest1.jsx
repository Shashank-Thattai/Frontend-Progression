import React, { createContext, useContext, useState } from 'react'

var UserContext = createContext();

const UseContextTest1 = () => {
    const[assets] = useState({amount:300000,total:1000000})
  return (
    <>
    <h2>This is my parent Component</h2>
    <UserContext.Provider value={assets}>
    <Child/>
    </UserContext.Provider>
    
    </>
  )
}

export default UseContextTest1;

function Child(){

    return(
        <>
        <div>My child component</div>
        <GrandChild/>
        </>
    )

}
function GrandChild(){
    return(
        <>
        <div>My GrandChild component</div>
        <GreatGrandChild/>
        </>
    )
}
function GreatGrandChild (){
    var assets = useContext(UserContext)
    return(
        <>
        <div>My Great GrandChild component - {assets.amount}/ {assets.total}</div>
        </>
    )

}