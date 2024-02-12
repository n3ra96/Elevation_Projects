import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'

const Navbar = ({Balance}) => {
   
    let money = 0
    let ChangeColor = 'white' 
    if(Balance != undefined && money == 0){
        money = Balance
    }

    if(Balance >= 500){
        ChangeColor = 'green'
    }else{
        ChangeColor = 'red'
    }
    
    
  return (
    <div className='navbar'>
        
        <span className='title'>
            <Link to="/">Transactions</Link> 
        </span>
        <span className='title'>
            <Link to="/Opretaions">Opretaions</Link>   
        </span>
        <span className='title'>
            <Link to="/Breakdown">Breakdown</Link>     
        </span>
        <span className='balance' >
            Balance: 
            <span style={{color: ChangeColor}}>
                ${money}   
            </span>
        </span>

    </div>
  )
}

export default Navbar