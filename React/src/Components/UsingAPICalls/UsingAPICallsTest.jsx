import React, { useEffect, useState } from 'react'
import axios from "axios";

const UsingAPICallsTest = () => {
    const[sat,setSat] =useState([]);
    const[searchterm,setSearchTerm] = useState('')
    const[idsearch,setIdSearch] = useState('')
    const[sortmass,setSortMass] = useState(true)
useEffect(()=>{
    axios.get('https://isro.vercel.app/api/customer_satellites').then((response)=>{
        console.log(response.data)
        setSat(response.data.customer_satellites)
    })
},[])

const filtered = sat.filter((res)=>{
    return( res.country.toLowerCase().includes(searchterm.toLowerCase()) &&
            res.id.toLowerCase().includes(idsearch.toLowerCase())
    )
})

function handleMass(){
    const sorted = [...sat].sort((a,b)=>{
        return !sortmass? a.mass - b.mass : b.mass - a.mass;
        
    })
    setSat(sorted)
    setSortMass(!sortmass)

}


  return (
        <>
        <table>
            <thead>
                <tr>
                    <td>ID
                        <input type='text' placeholder='type you id in here'
                        value={idsearch} onChange={(event)=>{setIdSearch(event.target.value)}}></input>
                    </td>
                    <td>Country
                        <input type='text' placeholder='type your text here' value={searchterm} onChange={(event)=>{setSearchTerm(event.target.value)}}></input>
                    </td>
                    <td>Launch Date</td>
                    <td onClick={handleMass}>Mass {sortmass? '↑' : '↓'}</td>
                    <td>Launcher</td>
                </tr>
            </thead>
            <tbody>
                {
                    filtered.map((satellite,index)=>{
                        return(<tr key={index}>
                            <td>{satellite.id}</td>
                            <td>{satellite.country}</td>
                            <td>{satellite.launch_date} </td>
                            <td>{satellite.mass}</td>
                            <td>{satellite.launcher}</td>
                        </tr>)
                    })
                }

            </tbody>
        </table>
        </>
      )
}

export default UsingAPICallsTest;