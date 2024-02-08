import React from 'react'
import { useState } from 'react';
import Transaction from './Transaction';

const Transactions = (props) => {
   console.log(props)
  return (
    <div>
        Transactions
        {props.Data.map((t,index) => <Transaction key={index} id={t._id} amount={t.amount} vendor={t.vendor} category={t.category} fetchUserData={props.fetchUserData} />)}
    </div>
  )
}

export default Transactions