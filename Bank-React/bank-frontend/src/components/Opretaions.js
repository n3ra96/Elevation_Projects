import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Opreations.css'

const Opretaions = (props) => {
    console.log(props)
    const [textAmount, setTextAmount] = useState("")
    const [textVendor, setTextVendor] = useState("")
    const [textCategory, setTextCategory] = useState("")

    const updateTextAmount = (event) => {
        setTextAmount(event.target.value)
    }

    const updateTextVendor = (event) => {
        setTextVendor(event.target.value)
    }

    const updateTextCategory = (event) => {
        setTextCategory(event.target.value)
    }

    

    const requestBody = (textAmount,textVendor,textCategory) => {
        return({
            "amount": textAmount, 
            "vendor": textVendor,
            "category": textCategory
        })
    }
        
      

    function handleClick(boo) {
        let jsonData
        let newTextAmount = textAmount
        if(textAmount && textVendor && textCategory){
            
            if(textAmount > 0){
                if(boo === false){
                    newTextAmount = "-"+textAmount
                    
                }
                props.setBalance(parseInt(newTextAmount)+props.Balance)
                jsonData = requestBody(newTextAmount,textVendor,textCategory)
                console.log(jsonData)
                fetch('http://localhost:3200/Transactions', {  
            
                  method: 'POST', 
                  body: JSON.stringify(jsonData) ,
                  headers: {
                    'Content-Type': 'application/json'
                  }
            
                })
            }else{
                alert("negative amount!!")
            }

        }else{
            alert("input error!!")
        }

        setTextAmount('')
        setTextVendor('')
        setTextCategory('')
        
      }

  return (
    <div>
        <h1>Insert Transactions</h1><br></br><br></br>
        <div className='operations'>
            <input type="text" value={textAmount} placeholder='Transaction amount' onChange={updateTextAmount} />
            <br></br><br></br>
            <input type="text" value={textVendor} placeholder='Transaction vendor' onChange={updateTextVendor} />
            <br></br><br></br>
            <input type="text" value={textCategory} placeholder='Transaction category' onChange={updateTextCategory} />
            <br></br><br></br>
            <Link to="/">   
            <button style={{backgroundColor: 'green'}} onClick={() =>  handleClick(true)}>Deposit</button>
            <button style={{backgroundColor: 'red'}} onClick={() =>  handleClick(false)}>Withdraw</button>
        </Link>
        </div>
    </div>
  )
}

export default Opretaions