import React, { useEffect, useState } from 'react'
import axios from "axios"

const ChildComponent2 = ({parentCallBack}) => {
    const[satellite,setSatellite] = useState([])

    useEffect(()=>{
        axios.get('https://isro.vercel.app/api/customer_satellites').then((response)=>{
            console.log(response)
            setSatellite(response.data.customer_satellites)
            parentCallBack(response.data.customer_satellites.length)
        })

    },[])
  return (
   <>
   Child Component - {JSON.stringify(satellite)}
   </>
  )
}

export default ChildComponent2;