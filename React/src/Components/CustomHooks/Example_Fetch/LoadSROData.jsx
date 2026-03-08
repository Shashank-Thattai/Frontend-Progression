import React from 'react'
import useFetchHook from './FetchHook';
import useAxiosAPI from './FetchHook';

const LoadSROData = () => {
    const {data,loading,error} = useAxiosAPI("https://isro.vercel.app/api/customer_satellites")

    if(loading){
        return <h3>Data is loading</h3>
    }else if(error)
    {
        return <h3>There is an error -{error}</h3>
    } else if(data)
    {
        return <h3>Products got loaded -{JSON.stringify(data)}</h3>
    }
  return (
    <>
    </>
  )
}

export default LoadSROData;