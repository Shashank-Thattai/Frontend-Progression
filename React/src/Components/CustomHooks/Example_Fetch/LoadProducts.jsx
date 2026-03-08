import React, { useEffect } from 'react'
import useFetchHook from './FetchHook'
import useAxiosAPI from './FetchHook'

const LoadProducts = () => {
    const {data,loading,error} = useAxiosAPI("https://fakestoreapi.com/products")
    
    if(loading){
        return <h3>Data is loading...</h3>
    } 
    else if(error){
        return <h3>Error -{error}</h3>
    }
    else if (data)
    {
        return(
            <>
                Products are loaded: {JSON.stringify(data)}
            </>
    )
  }
}

export default LoadProducts;