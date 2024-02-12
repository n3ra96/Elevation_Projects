import React from 'react'
import { useState , useEffect } from 'react'
import './Breakdown.css'


const Breakdown = () => {

    let [SumCategory,setSumCategorytData] = useState([])

    const fetchSumCategorytData = () => {


        fetch("http://localhost:3200/SumCategory")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setSumCategorytData(data)
          })
      }

      useEffect(() => {
        fetchSumCategorytData()
      }, [])

  return (
    <div>
        <h1>Breakdown</h1>
        {SumCategory.map((item,index) => <div className='sum' key={index}>{item._id}={item.total}</div>)}
    </div>
  )
}

export default Breakdown