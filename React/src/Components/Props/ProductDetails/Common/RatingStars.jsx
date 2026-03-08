import React from 'react'
import ratingStarImage from "../../../../Assets/Screenshot 2026-02-17 at 3.53.12 PM.png"
import "./ratingStar.css"

const RatingStars = (props) => {
    //var rating = 3.6;
    var rating = props.rating;
    var fullstars = Math.floor(rating)
    var halfstars = rating %1 !==0? 1:0
    var emptystars = 5-fullstars-halfstars

  return (
    <>
    {/*<OtherComponent data = {props.children}/>*/}
    {props.children}
    <div className='star-rating-container' title={"rating "+rating}>
        {
            [...new Array(fullstars)].map((item,index)=>{
                <div className='fullstar' key={index}></div>}
            
        )
            }
            
        {
            halfstars == 1 &&
            <div className='halfstar'></div>}
        <div className='disabledStar'></div>
        {
            [...new Array(emptystars)].map((item,index)=>{
                <div className='disabledStar' key={index}></div>}
            
        )
        }
    </div>
    
    </>
  )
}

export default RatingStars;