import React from 'react';
import SavedBook from '../components/savedBook';
// import APICAll from '../routes/apiCalls';
// import API from '../api';
let books;

getBooks();

async function getBooks() {
  
  try {
    books = await fetch("/api/books");
  } catch (err) {
    console.log('err.message');
    console.log(err.message);
  }
  // console.log('past catch');
  books = await books.json();
  console.log('res');
  console.log(books);

  return books;
}

function Saved() {
  // console.log('getBooks');
  // console.log(getBooks());

  console.log('books');
  console.log(books);

  return (
    <div className='page'>
        <h2>Saved</h2>
        <div className='books'>
            {books.map(book =>
              <SavedBook title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.image}/>
            )}
        {/* <SavedBook title={books[0].title} authors={books[0].authors} description={books[0].description} image={books[0].image} link={books[0].image}/>         */}
        </div>
        
    </div>
    
  );
}

export default Saved;