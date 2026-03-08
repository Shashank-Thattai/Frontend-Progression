import React, { useEffect, useReducer } from 'react'

var userResistrationDetails ={
    userName: '',
    userAge: 0,
    userEmail:'',
    userLocation:'',
    usetSal:0,
    userPf:0,
    companyname: 'MicroSoft',
    location: 'New York',
    productdetails:[],
    userAccountDetails:[]

};

    function reducer(state,action){ 
        //logic of updating state value based on action
        //console.log(state);
        console.log(action);

        return {...state, [action.type]:action.value};

    }
const UseReduerDemo2 = () => {

    const[state,dispatch] = useReducer(reducer,userResistrationDetails);
    
   function showData(){
    console.log('state');
    console.log(state)
   }

   useEffect(()=>{
    dispatch({type: 'productdetails', value:[{name: 'laptop',price:2000}]})
   },[])
   
    
  return (
    <>
        <h3>User Registration Page</h3>
        <ul>
            <li>
                <input type='text' placeholder='Enter username' onChange={(event)=>{dispatch({type: 'userName', value: event.target.value})}} ></input>
            </li>
            <li>
                <input type='number' placeholder='Enter userage' onChange={(event)=>{dispatch({type: 'userAge', value: event.target.value})}} ></input>
            </li>
            
            <li>
                <input type='email' placeholder='Enter email' onChange={(event)=>{dispatch({type: 'userEmail', value: event.target.value})}}></input>
            </li>
            <li>
                <input type='text' placeholder='Enter location'onChange={(event)=>{dispatch({type: 'userLocation', value: event.target.value})}} ></input>
            </li>
            <li>
                <input type='number' placeholder='Enter salary' onChange={(event)=>{dispatch({type: 'userSal', value: event.target.value})}}></input>
            </li>
            <li>
                <input type='number' placeholder='Enter pf' onChange={(event)=>{dispatch({type: 'userPf', value: event.target.value})}}></input>
            </li>
            <li>
                <button onClick={showData}>Show Data</button>
            </li>
        </ul>
    </>
  )
}

export default UseReduerDemo2;