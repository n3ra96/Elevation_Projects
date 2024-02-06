import React from 'react'
import { useState } from 'react'
import './Catalog.css'
import Movie from './Movie'




const Catalog = (movieCatalog) => {
     

    const [text, setText] = useState("")
    
    
    let rentedMovie = movieCatalog.movieCatalog.filter(entity => entity.isRented === true)


    const updateText = (event) => {
        setText(event.target.value)
    }
    
    

    const searchResult = (movie) =>{
        
        if (text == ""){
           return ( <Movie key={movie.id}  id={movie.id} img={movie.img} rented={movieCatalog.rented} isRented={movie.isRented}  /> )
        }else if(movie.title.includes(text.toLowerCase()) || movie.title.includes(text.toUpperCase()) ){
           return (  <Movie key={movie.id}  id={movie.id} img={movie.img} rented={movieCatalog.rented} isRented={movie.isRented}  /> )
        }
    }
    

    const rentedList = (rentedMovie) => {

        if (rentedMovie.length > 0 ){
            return(
                <>
                    <div className='title'>
                        Rented:
                    </div>

                    <div className='rent-list'>
                    
                    <br></br>    
                    {rentedMovie.map((rented, i) =>  (
                    <div key={i}>
                    {searchResult(rented)}
                    </div>

                    ))}
                    </div>
                </>

            )
        }

    }
    

  return (
    <div>

            <input type="text" value={text} onChange={updateText} />
            
            <br></br>
            <span>Budget: {movieCatalog.Budget}</span>
            <br></br>

         
        
         {rentedList(rentedMovie)} 

         <div className='title' >
            Catalog:
         </div>  

        <div className='movie-list'>
           
           
            {movieCatalog.movieCatalog.map((movie, i) =>  (
            <div key={i}>    
                {searchResult(movie)}
            </div>
            ))}

        </div>


    </div>
    
  )
}

export default Catalog