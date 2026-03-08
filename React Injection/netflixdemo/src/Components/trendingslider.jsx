import React from 'react'
import './trendingslider.css'

const TrendingSlider = () => {
    var values =['one','two']
  return (
    <>
    <div className='trending-new'> 
        
Trending now 
    </div>
    <div className=' netflix-slider trendingSlider'>
        <div className='previousbtn'>prev</div>
        <div className='sliderContainer'>
            <div className='sliderTrack'>
        
        {
            values.map((item,index)=>(
                <div className={"Dimesions"+item} key ={index}> </div>
            ))
        }
        </div>
        </div>
        <div className='nextbtn'>Next</div>
        <div className='one'></div>

    </div>
    </>
  )
}

export default TrendingSlider;