import React from 'react'
import { useParams } from 'react-router';
import './MovieDetail.css'

const MovieDetail = ({movieCatalog}) => {
    const { movieID } = useParams();
    const entity = movieCatalog.find((movie) =>  movie.id == movieID );
    const { img, title, year, descrShort } = entity;
    
    //{id isRented title year img descrShort}
  return (
    <div className="desc-card">
      <h3>{title}({year})</h3>
      <img src={img} alt={title} />
      <p className="desc-card-description">{descrShort}</p>
    </div>
  )
}

export default MovieDetail