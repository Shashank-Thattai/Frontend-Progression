import React, { useState } from 'react'

const Contact1 = () => {

  const[buttonList] = useState(['text',"number",'radio','checkbox'])
  return (
    <>
    {
      buttonList.map((type)=>{
        return <RenderButton type = {type}></RenderButton>

      })
    }
    </>
  ) 
}
function RenderButton({type}){
  return(
    <>
    
    <input type={type}/>
      </>
  )
}

export default Contact1;