import React from 'react'
import "./PropsDemo.css"

const PropsDemo = ({userName,lastName,age,profession,backgroundColor = "pink",address}) => {
    console.log(address)
    
    /*var details = {
        firstName : 'john',
        lastName: 'doe',
        age:30,
        profession: "developer"
        
    }*/
  return (
    <>
    <ul>
        <div style={{backgroundColor:backgroundColor}}>
            <h2>{userName} {lastName}</h2>
            
        </div>
        <hr/>
        <li>Age  : {age}</li>
        <li>Profession : {profession}</li>
        <hr/>

    </ul>

    </>
    )
}

export default PropsDemo;


//Also can be declared this way
/*Export default function PropsDemo(){
    return(
        <>
        </>
    )
}*/