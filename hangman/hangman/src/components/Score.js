import React from 'react'

const score = ({props}) => {
  let colorName
  if(props >= 80){
    colorName = "green"
  }else if(props < 80 && props >= 50){
    colorName = "yellow"
  }else{
    colorName = "red"
  }
    
  return (
    <div className='score' style={{ color: colorName }}>
        Score: {props}
    </div>
  )
}

export default score