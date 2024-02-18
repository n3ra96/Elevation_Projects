import React, { useState } from 'react'
import './Transaction.css'

const Transaction = (props) => {
    console.log("inside transaction",props.Light)
    let transactionClass
    if(props.Light == 0){
      transactionClass = 'transaction'
    }else{
      transactionClass = 'darktransaction'
    }
    
    let color = 'white'
    if(props.amount > 0){
        color = 'green'
    }else if(props.amount < 0){
        color = 'red'
    }

    const handleDelete = (idName) => {
        props.fetchUserData()
        fetch(`http://localhost:3200/Transactions/${idName}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }

  return (
    <div className={transactionClass} key={props.id} >
        <span className='vendor'>vendor:{props.vendor}</span><span className={color}>amount:{props.amount}</span><br></br>
        <span className='category'>category:{props.category}</span><span><button onClick={() => handleDelete(props.id) }>Delete</button></span>
    </div>
  )
}

export default Transaction