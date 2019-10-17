import React from 'react';
import './search.scss';

const Search = props => {
    return (
        <form>
          <input type='search' placeholder='search movie' onChange={props.onChange('value')} className='search' />
        </form>
    )
}

export default Search

