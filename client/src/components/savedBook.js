import React from 'react';

function savedBook({book}) {

    function deleteFavorite() {
      fetch(`/api/books/${book._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

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
            <div className='favclicks'>
              <a href={book.link} target='_blank' rel='noreferrer'>View</a>
              <button className='favorite' id={book._id} onClick={deleteFavorite}>Remove from saved</button>
            </div>
            
        </div>
    </div>

    
  );
}

export default savedBook;