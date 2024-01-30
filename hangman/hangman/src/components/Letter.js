import React from 'react'

const Letter = (props) => {
  
  let crossed = <span>{props.props} </span>
  if(props.boo){
    crossed = <span style={{textDecoration: 'line-through'}}>{props.props} </span> 
  }
  return (
      
      <span  className='letter' onClick={() => props.selectLetter(props.props)}>{crossed}</span>
    
  )
}

export default Letter