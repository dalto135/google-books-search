import React from 'react';

function savedBook({_id, title, authors, description, image, link}) {

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
            <div className='favclicks'>
              <a href={link} target='_blank' rel='noreferrer'>View</a>
              <button className='favorite' id={_id}>Remove from saved</button>
            </div>
            
        </div>
    </div>
  );
}

export default savedBook;