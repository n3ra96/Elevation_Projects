import React from 'react'
import { useState , useEffect } from 'react'

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
        Breakdown
        {SumCategory.map((item,index) => <div key={index}>{item._id}={item.total}</div>)}
    </div>
  )
}

export default Breakdown