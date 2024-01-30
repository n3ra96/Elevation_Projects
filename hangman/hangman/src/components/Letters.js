import React from 'react'
import Letter from './Letter';

const Letters = (props) => {
  const alphabet = Object.keys(props.props)
  
  return (
    <div>
        {alphabet.map((abgd , index) => <Letter props={abgd} boo={props.props[abgd]} 
        selectLetter={props.selectLetter} key={index} />)}
    </div>
  )
}

export default Letters