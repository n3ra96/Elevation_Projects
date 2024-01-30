import React from 'react'
import Letter from './Letter'

const Solution = (props) => {
  let existArr = []
  let currWord = props.solution.word
  let currLetters = props.props
  currWord.forEach(L => {if(currLetters[L]){existArr.push(L)}else{existArr.push("_ ")}})
    
  
  
return (
<div className='upper'>
    {existArr.map((word,index)=> <Letter props={word} key={index}/>)}<br></br>
    <div className='hint'>{props.solution.hint}</div>
</div>
)
}

export default Solution