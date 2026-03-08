import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    const[productdetails,setProductDetails] = useState([])
    var dataURL = "https://fakestoreapi.com/products"
    useEffect(()=>{

        axios.get(dataURL).then((res)=>{
            setProductDetails(res.data)
        })
    },[])
  return (
    <>
    <ul>
        {
            productdetails.map((details)=>{
                return (
                    <ul key={details.id}>
                        <li><img src={details.image} alt=''></img></li>
                        <li>product name is - {details.title}</li>
                        <li>Price is ={details.price}</li>
                        <li>Description is ={details.description}</li>
                        <li>
                            <Link to={"/pDetails"+ "/" +details.id + "/" + details.rating.count} >
                            <button>View Details</button>
                            </Link>

                        </li>
                    </ul>
                )
            })
        }
    </ul>
    
    </>
  )
}

export default ProductDetails;