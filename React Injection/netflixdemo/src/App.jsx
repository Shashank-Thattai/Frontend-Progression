import React from 'react'
import './App.css'
import PageHeader from './COmponents/pageheader';
import MiddleComponent from './Components/middlecomponent';
import TrendingSlider from './Components/trendingslider';

const App = () => {
  return (
    <>
    <div className='continer'>
        <PageHeader/>
        <MiddleComponent/>
        <TrendingSlider/>
        
    </div>
    <div style ={{"height": '500px'}}></div>
    
    </>
  )
}

export default App;
