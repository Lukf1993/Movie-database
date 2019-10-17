import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './movie.scss';


const Movie = props => {
    const movie = props.movie
    

     return ( 
         <div>
         {movie.map(item => (
             <>
             <div className='flex flex-row movie'>
                <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} 
                    alt='poster' className='movie_img' />
                <div className='flex flex-column'>
                    <h1 className='movie_title'>{item.title}</h1>
                    <p className='movie_paragraph'>{item.overview}</p>
                    <p className='movie_paragraph movie_paragraph--size'>{`Genre: ${item.genres[0].name}`}</p>
                    <StarRatingComponent className='movie_rating'
                    name="rate1" 
                    starCount={10}
                    value={item.vote_average}
        />
                </div>
            </div>
            </>
         ))}
        </div>
    )
    
}

export default Movie