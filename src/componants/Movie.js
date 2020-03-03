import React from 'react'
import './Movie.css'
import RatingStars from './RatingStars'

function Movie({movie}) {
    return (
        <div className="movieCard">
            <div className="movieSatrs">
                <RatingStars rating={movie.rating}/>
            </div>
            <div className="movieDescription">
                <p>Title : <a href={`https://www.google.com/search?q=movie+${movie.title}`} target="_blank">{movie.title}</a></p>
                <p>Synopsis : {movie.synopsis}</p>
                <p>Actors : {!Array.isArray(movie.actors) ? <a href={`https://www.google.com/search?q=actor+${movie.actors}`} target="_blank">{movie.actors}</a> : movie.actors.map((actor,i)=>(
                <> <a href={`https://www.google.com/search?q=actor+${actor}`} target="_blank">{actor}</a> {i < movie.actors.length-1 ? <span>,</span>: null} </>
                ))}</p>
            </div>
            
        </div>
    )
}
export default Movie;