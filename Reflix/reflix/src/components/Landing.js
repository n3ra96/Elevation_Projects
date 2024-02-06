import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <div className='Header'>
        WHO'S WATCHING?
    </div>

        <br></br>
        
    <div className='Landing'>

        <div className='watcher' style={{backgroundColor: "blue"}}>
            <Link to="/catalog">Mona</Link>
        </div>

        <div className='watcher' style={{backgroundColor: "red"}}>
            <Link to="/catalog">Jasmine</Link>
        </div>

        <div className='watcher' style={{backgroundColor: "green"}}>
            <Link to="/catalog">Aura</Link>
        </div>

        <div className='watcher' style={{backgroundColor: "yellow"}}>
            <Link to="/catalog">Tina</Link>
        </div>

    </div>
    </>
    
  )
}

export default Landing