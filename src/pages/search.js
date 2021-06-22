import React from 'react';
import SearchedBook from '../components/searchedBook';

function Search() {
  return (
    <div className='page'>

        <h2>Search</h2>

        <div className='searchBooks'>

            <div id='input'>
                <input id='inputField'></input>
                <button id='inputButton'>Search</button>
            </div>

            <SearchedBook/>
            <SearchedBook/>

        </div>
        
    </div>
  );
}

export default Search;