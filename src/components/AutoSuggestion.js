import React from 'react';
import './autoSuggestion.scss';

const AutoSuggestion = props => {

    const suggestion = props.data
    
    return (
        <>
        <ul className='list'>
        {suggestion.map((item, index) => (
            <>
            {index < 5  && (
                <li key={item.id}>
                    <button onClick={() => props.getMovie(item.id)} className='button'>
                        <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} className='button_img' alt='poster'></img>
                        <div className='flex'>
                            <h1 className='button_title'>{item.title}</h1>
                            <p className='button_paragraph'>{item.release_date}</p>
                        </div>
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