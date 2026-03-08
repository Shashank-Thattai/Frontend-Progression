import React from 'react'

//Design Pattern to wrap components with extra information
const HigherOrderComponents = () => {
    var StatementComp = addAuthToComponents(UpdateStatement)
    var ViewTrans = addAuthToComponents(ViewTranscations)
    var UserLogout = addAuthToComponents(UserLogOutButton)
    var FDBtn = AddLogginComp(TakeFD)
  return (
   <>
   <div>HOC</div>
   {/*<UserLogOutButton/>
   <UpdateStatement/>
   <ViewTranscations/>
   <TakeFD/>*/}
   <StatementComp/>
   <br></br>
   <ViewTrans/>
   <br></br>
   <UserLogout/>
   <br></br>
   <FDBtn/>
   
   </>
  )
}
function TakeFD(){
    return(
        <>
            <button>Take FD from us</button>
        </>
    )
}

function UserLogOutButton(){
   
    return(
        <>
        <button>User Logout</button>
        <hr/>
        
        </>
    )
}

function UpdateStatement(){
    return(
        <>
        <div>
            <a href='http://updateStatement'>Update Statement Link</a></div>
            <hr/>
            

        </>
    )
}
function ViewTranscations(){
    return(
        <>
        <div>
            <a href='http://updateStatement'>View Transaction Link</a></div>
            <hr/>
        </>
    )
}

function addAuthToComponents(WrappedComp){
    return function EnhancedComponentWithAuth(){
        var isAuth = true;
         if(isAuth)
{       return<WrappedComp></WrappedComp>
    }else{
        return(<b>Your not Authorized</b>)
    }
}
}

function AddLogginComp(WrappedComp)
{
    return ()=>{
        return(
        <>
            <div>Loggin Enabled</div>
            <WrappedComp></WrappedComp>
        </>
        )
    }
}



export default HigherOrderComponents;