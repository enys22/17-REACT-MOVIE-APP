import React from 'react'
import Movie from './Movie'
import './MovieList.css'
import AddMovie from './AddMovie'

function MovieList(props) {
    return (
        <div className='moviesList'>
            {props.movieList.map((movieItem,i) =>
                <Movie movie={movieItem} key={i}/>
            )}
            <div className="movieCard">
                <AddMovie saveMovie={props.saveMovie}/>
            </div>
        </div>
    )
}
export default MovieList;