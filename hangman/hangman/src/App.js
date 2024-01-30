import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';
import { useState } from 'react';
import EndGame from './components/EndGame';

function App() {

  const generateLetterStatuses = () => {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  let letterStatus = generateLetterStatuses()

  let solutions =[
    {
      word: ["C","A","L","M"],
      hint: "ideal mood while coding."
    }
    ,
  {
    word: ["G","U","I","T","A","R"],
    hint: "A musical instrument with strings."
  }
  ,
  {
    word: ["O","X","Y","G","E","N"],
    hint: "A colorless, odorless gas essential for life."
  }
  ,
  {
    word: ["M","O","U","N","T","A","I","N"],
    hint: "A large natural elevation of the Earth's surface."
  }
]
  
  let [currIndex,setCurrIndex] = useState(0)
  let [Page,setPage] = useState(0)
  let [Chosen , setChosen] = useState(letterStatus)
  let [ChosenScore , setChosenScore] = useState(100)
  let [Attempts , setAttempts] = useState(6)

  const solution = solutions[currIndex]

  const pickSolution = () => {
    let newIndex = currIndex
    if(newIndex === 3){
      newIndex=0
    }else{
      newIndex++
    }
    setCurrIndex(newIndex)

  }
  

  const changeScore = (boo) => {
    let newScore = ChosenScore
    let newAttempts = Attempts
    
    if(boo){
      newScore+=5
      setChosenScore(newScore)
    }else{
      newScore-=10
      newAttempts--
      setChosenScore(newScore)
      setAttempts(newAttempts)
    }

  }

  const selectLetter = (letter) => {
    let newChosen = {...Chosen}
    let checkSolution = false
    solution.word.forEach(L => {if(L === letter){checkSolution = true}})
    if( checkSolution && !newChosen[letter] ){
      changeScore(true)
    }else if(!checkSolution && !newChosen[letter]){
      changeScore(false)
    }

    newChosen[letter]=true
    setChosen(newChosen)


  }

  const startgamePage = () => {
    
    let pervPage = Page
    pervPage = 0 
    setPage(pervPage)
    setChosenScore(100)
    setAttempts(6)
    letterStatus = generateLetterStatuses()
    setChosen(letterStatus)
    pickSolution()
  }

  const endgamePage = () => {
    let nextPage = Page
    nextPage = 1 
    setPage(nextPage)
  }

  const getHangmanImg = (attempts) => {
    return `hangman/hangman-${attempts}.svg`
  }
  
  const mainPage = () => {
    return (
       (Page === 0)?
      <>
        <br></br>
        <img src={getHangmanImg(6 - Attempts)} />
        <Score props={ChosenScore} />
        <Solution props={Chosen} solution={solution} />
        <Letters props={Chosen} selectLetter={selectLetter}/>
        <EndGame props={Chosen} word={solution.word} score={ChosenScore} attempts={Attempts} page={Page} change={endgamePage} />
      </>
    
    :
      
      <>
        <br></br>
        <img src={getHangmanImg(6 - Attempts)} />
        <EndGame props={Chosen} word={solution.word} score={ChosenScore} attempts={Attempts} page={Page}  />
        <button onClick={startgamePage}>Try Again!</button>
      </>
      
      )

  }

  return (
    <div className="App">
      
      {mainPage()}
  
    </div>
  );
}

export default App;
