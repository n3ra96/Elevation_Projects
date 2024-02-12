import React from 'react'
import { useState } from 'react';
import Transaction from './Transaction';
import './Transactions.css'
const Transactions = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Transactions</h1>
      <div className='transactions'>

        {props.Data.map((t, index) => <Transaction key={index} id={t._id} amount={t.amount} vendor={t.vendor} category={t.category} fetchUserData={props.fetchUserData} />)}
      </div>
    </div>
  )
}

export default Transactions