import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import IndeterminateCheckBoxSharpIcon from '@mui/icons-material/IndeterminateCheckBoxSharp';


const Movie = (props) => {
  
  const switchIcons = (boo) => {
    if(boo){
      return(<div className='btnPlus'>
      <IndeterminateCheckBoxSharpIcon onClick={() => props.rented(props.id)} />
      </div>)
    }else{
      return(<div className='btnPlus'>
      <AddBoxSharpIcon onClick={() => props.rented(props.id)} />
      </div>)
    }
  }


  return (
    <div className="movie">
      
       {switchIcons(props.isRented)} 
      <Link to={`/movies/${props.id}`} >
      <img src={props.img} alt={props.id} />
      </Link>

    </div>
  )
}

export default Movie