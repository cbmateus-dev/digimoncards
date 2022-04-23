import React from "react";


export const Corpo = (props) => {
 
  const val = props.val
  
  
  
  return (
    <div>
      <img src={val.image_url}
        alt='Digimon'
        className='post'
         />.
    </div>
  )

}
