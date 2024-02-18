import React from 'react'
import { useState } from 'react';
import Transaction from './Transaction';
import './Transactions.css'
const Transactions = (props) => {
  console.log(props)

  let[Light,setLight]= useState(0)

    const changeLight = () => {
      let newLight = Light
      if (newLight == 0){
        newLight = 1
        setLight(newLight)
      }else{
        newLight = 0
        setLight(newLight)
      }
    }

    console.log(Light)
  return (
    <div>
      <h1>Transactions</h1>
      <button onClick={changeLight}>changeTheme</button>
      <div className='transactions'>

        {props.Data.map((t, index) => <Transaction key={index} id={t._id} amount={t.amount} vendor={t.vendor} category={t.category} fetchUserData={props.fetchUserData} Light={Light}/>)}
      </div>
    </div>
  )
}

export default Transactions