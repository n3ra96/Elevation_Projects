import React from 'react'

const EndGame = (props) => {
        
        let page = props.page
        let word = props.word
        let status = props.props
        let score = props.score
        let counter = word.length
        let attempts = props.attempts
        
        word.forEach(L => {
          if(status[L]){
            counter--
          }
        });

    
    const result = () => {
      
      if(page === 1){
        if(counter === 0){
          return(<div className='endgame'>Congratulations! , You Won</div>)
        }

        if(score <= 0){
          return(<div className='endgame'>You Lost! your score is zero!, the secret word is: {word}</div>)
        }
        
        if(attempts <= 0){
          return(<div className='endgame'>You Lost! You got hanged!</div>)
        }

      }

      if(page === 0){
        if(counter === 0 || score <= 0 || attempts <= 0){
          return(props.change())
        }
      }

    }

  return (
    <div>{result()}</div>
  )
}

export default EndGame