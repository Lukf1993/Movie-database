import React, { useState } from 'react';

const Search = props => {
    return (
        <form>
          <input type='search' placeholder='search movie' onChange={props.onChange('value')} />
        </form>
    )
}

export default Search

