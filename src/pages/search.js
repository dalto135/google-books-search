import React from 'react';
import SearchedBook from '../components/searchedBook';

function Search() {
  return (
    <div className='page'>

        <h1>Search</h1>

        <div id='input'>
            <input id='inputField'></input>
            <button id='inputButton'>Search</button>
        </div>
        
        <div className='books'>
            <SearchedBook/>
            <SearchedBook/>
        </div>
        
    </div>
  );
}

export default Search;