import React from 'react';
import './TrendingSlider.css';

const TrendingSlider = () => {
  const values = ['one', 'two', 'three', 'four', 'five'];
  var nextIncrement = 0;
  var  handleNextClick=()=>{
    nextIncrement+= -80
    document.querySelector(".slideTracker").style.transform ='translateX('-' + nextIncrement)'

  }

  return (
    <>
      <div className="trending-now">Trending Now</div>

      <div className="trendingSlider">
        <div className="previousbtn">Prev</div>

        <div className="sliderContainer">
          <div className="sliderTrack">
            {values.map((item, index) => (
              <div className={`slider-item ${item}`} key={index}></div>
            ))}
          </div>
        </div>

        <div className="nextbtn" onClick={handleNextClick}>Next</div>
      </div>
    </>
  );
};

export default TrendingSlider;
