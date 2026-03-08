import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const SingleProductDetails = () => {
    var {productId} = useParams();
    console.log(productId)
    var params = useParams();
    console.log(params)
    var apiUrl = 'https://fakestoreapi.com/products/' + productId;
    const [productdata,setProductData] = useState({}) 
    useEffect(()=>{
        axios.get(apiUrl).then((response)=>{
            setProductData(response.data)
        })
    },[apiUrl])
  return (
    <>
    <ul>
        
        {
           Object.keys(productdata).map((key)=>{
            return typeof productdata[key] !== 'object' && <li key={key}> {key}-{productdata[key]}</li>
            })
        }
    </ul>
    <Link to= '/productDetails'>
    <button>Back to Products</button></Link>
    </>
  )
}

export default SingleProductDetails;