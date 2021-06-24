import React from 'react';
// import { Link } from 'react-router-dom';

function Book({title, authors, description, image, link}) {
  console.log('book');
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
            {/* <p>Link: {link}</p> */}
            <a href={link} target='_blank' rel='noreferrer'>Link</a>
        </div>
    </div>
    
  );
}

export default Book;