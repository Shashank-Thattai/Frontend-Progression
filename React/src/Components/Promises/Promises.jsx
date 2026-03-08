import React, { useEffect, useState } from 'react'
//import axios from "axios";
import data from './data.json'

//'https://jsonplaceholder.typicode.com/users'
const Promises = () => {
    
    const[info,setInfo] = useState([])
    const[searchTerm,setSearchTerm] =useState('')
    const[sortAsc,setSortAsc] = useState(false)
    useEffect(()=>{
        setInfo(data)

    },[])

    const filtered = info.filter((user)=>{
        return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    function handleMass(){
        const sorted = [...info].sort((a,b)=>{
            return !sortAsc? a.mass - b.mass: b.mass - a.mass
        })
        setInfo(sorted)
        setSortAsc(!sortAsc)
    }
    
    




    return(
    <>
    <table>
        <thead>
            <tr>
                <th>Name
                    <input type='text'
                    placeholder='enter your name'
                    value={searchTerm}
                    onChange={(event)=>{setSearchTerm(event.target.value)}}></input>
                </th>
                <th>UserName</th>
                <th>email</th>
                <th onClick={handleMass}>mass {sortAsc?'↑' : '↓'}</th>
            </tr>
        </thead>
        <tbody>
            
                {
                    filtered.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.mass}</td>

                        </tr>

                            
                        
                    })
                }

        
        </tbody>
    </table>
    
    </>
  )
}

export default Promises;