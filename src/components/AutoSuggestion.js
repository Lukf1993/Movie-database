import React, { useState } from 'react';
// import './App.css';

const AutoSuggestion = props => {

    const suggestion = props.data
    console.log(suggestion)
    
    return (
        <>
        <ul>
        {suggestion.map((item, index) => (
            <>
            {index < 5  && (
                <li>
                    <button onClick={() => props.getMovie(item.id)}>
                        <img src={' http://image.tmdb.org/t/p/w185/' + item.poster_path} alt='poster'></img>
                        <h1>{item.title}</h1>
                        <p>{item.release_date}</p>
                    </button>
                    
                </li>
        )}
            </>
        ))}
        </ul>
        </> 
               
    )
} 

export default AutoSuggestion;