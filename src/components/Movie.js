import React, { useState } from 'react';

const Movie = props => {
    console.log(props.movie)
    
     return (        
        <div>
            <img src={`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} 
                alt='poster' />
            <h1>{props.movie.title}</h1>
            <p>{props.movie.overview}</p>
            <p>{`${props.movie.vote_average}/10`}</p>
        </div>
    )
    
}

export default Movie