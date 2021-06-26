import React from 'react';
import SearchedBooks from '../components/SearchedBooks';
import { Link } from 'react-router-dom';
let input = 'mindfulness';

function Search() {
  
  
  function myChangeHandler(event) {
      input = event.target.value;
      console.log('input change');
      console.log(input);
  }

  return (
    <div className='page'>

        <h2>Search</h2>

        <div className='searchBooks'>

            <div id='input'>
                <input id='inputField' onChange={myChangeHandler}></input>
                <Link to='/'>Search</Link>
            </div>

            <SearchedBooks input={input}/>

        </div>
        
    </div>
  );
}

export default Search;