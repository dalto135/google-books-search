import React from 'react';




function Book({book}) {

  function addFavorite() {
    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
  };

  return (
    <div className='bookdiv'>
        
        <img src={book.image} alt={book.image}/>
        <div className='booktext'>
            <p>{book.title}</p>
            <p>Author(s):</p>
            {book.authors.map(author =>
                <p key={Math.random()}>{author}</p>
            )}
            <p>Description: {book.description}</p>
            <div className='bookclicks'>
              <a href={book.link} target='_blank' rel='noreferrer'>View</a>
              <button className='addbutton' id={book._id} onClick={addFavorite}>Add to saved</button>
            </div>
            
        </div>
    </div>
    
  );
}

export default Book;