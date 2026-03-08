import React, { createContext, useContext, useState } from 'react'

var UserContext = createContext()



//Example for multiple context variables 

/*
var UserAccountDetails = createContext()

var UserSessionDetails = createContext()

var UserPersonalDetails = createContext()

<>
<UserSessionDetails.provider value ={{a,b}}>
    <UserAccountDetails.provider value ={{a,b}}>
        <CustomerPage></CustomerPage>
    </UserAccountDetails.provider>
</UserSessionDetails.provider>
 </>
*/


const UseContextDemo = () => {

    

    const[assets] = useState({amount:300000,bankBalance:1000000})

  return (
    <>


    <h2>Parent container -{assets.amount} </h2>
    
    <UserContext.Provider value={assets}>
        <ChildComponent1 />
    </UserContext.Provider>
    

    </>
  )
}

export default UseContextDemo;

function ChildComponent1(){
    
    return(
        <>
        <div>
            <h2> Child </h2>
            <GrandChildComponent1 />

        </div>
        </>
    )
}
function GrandChildComponent1(){
    var assetContext = useContext(UserContext)
    return(
        <>
        <div>
            <h2> Grand Child -{assetContext.amount}</h2>
            <GreatGrandChildComponent1/>
        </div>
        </>
    )
}
function GreatGrandChildComponent1(){
    var assetContext = useContext(UserContext)

    //or can do var assetContext = use(UserContext)
    console.log(UserContext)
    return(
        <>
        <div>
            <h2> Great Grand Child -{assetContext.amount}</h2>
        </div>
        </>
    )
}

