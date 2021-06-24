import React from 'react';
import SearchedBooks from '../components/SearchedBooks';

function Search() {
  let input = 'let input';
  function myChangeHandler(event) {
    input = event.target.value;
    // console.log('event.target.value');
    // console.log(event.target.value);
    console.log('input change');
    console.log(input);
}

  return (
    <div className='page'>

        <h2>Search</h2>

        <div className='searchBooks'>

            <div id='input'>
                <input id='inputField' onChange={myChangeHandler}></input>
                <button id='inputButton'>Search</button>
            </div>

            <SearchedBooks input={input}/>

        </div>
        
    </div>
  );
}

export default Search;