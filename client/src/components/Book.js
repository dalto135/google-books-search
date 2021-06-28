import React from 'react';


function addFavorite(book) {
  fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
};

function Book({_id, title, authors, description, image, link, book}) {

  return (
    <div className='bookdiv'>
        
        <img src={image} alt={image}/>
        <div className='booktext'>
            <p>{title}</p>
            <p>Author(s):</p>
            {authors.map(author =>
                <p key={Math.random()}>{author}</p>
            )}
            <p>Description: {description}</p>
            <div className='bookclicks'>
              <a href={link} target='_blank' rel='noreferrer'>View</a>
              <button className='addbutton' id={_id} onClick={addFavorite(book)}>Add to saved</button>
            </div>
            
        </div>
    </div>
    
  );
}

export default Book;