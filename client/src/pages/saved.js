import React, { useState, useEffect } from 'react';
import SavedBook from '../components/savedBook';

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      try {
        const books = await fetch("/api/books").then(resp => resp.json());
        setBooks(books);
      } catch (err) {
        console.log('err.message');
        console.log(err.message);
      }
    }
    getBooks();
  }, [])

  console.log('books');
  console.log(books);

  return (
    <div className='page'>
        <h2>Saved</h2>
        <div className='books'>
            {books.map(book =>
              <SavedBook key={book._id} book={book} />
            )}
        </div>
        
    </div>
    
  );
  
}

export default Saved;