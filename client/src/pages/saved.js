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

  books.map(book => {
    let button = document.getElementById(book._id);
    button?.addEventListener('click', function() {

      fetch(`/api/books/${book._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
  })

  console.log('books');
  console.log(books);

  return (
    <div className='page'>
        <h2>Saved</h2>
        <div className='books'>
            {books?.map(book =>
              <SavedBook key={book._id} _id={book._id} title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.link}/>
            )}
        </div>
        
    </div>
    
  );
  
}

export default Saved;