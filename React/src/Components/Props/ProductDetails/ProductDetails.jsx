import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./ProductDetails.css"
import RatingStars from './Common/RatingStars'

const ProductDetails = () => {

  const[productdetails,setProductDetails] = useState([])
  //var maxcount = 10;
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(((response)=>{
      console.log(response)
      //debugger;
    console.log(response.data)
    setProductDetails(response.data)
    }))
  },[])
  return (
    <div className='productDetailsContainer'>
    {
      productdetails.map((mapped,index)=>{
        return (<div className="card" style={{width : "18rem"}} key={index}>
          <img src={mapped.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{mapped.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
          <RatingStars rating = {mapped.rating.rate}>
            <h1>Rating:{index}</h1>
          </RatingStars>
    </div>
</div>)

      })
    
}
    </div>
  )
}

export default ProductDetails;