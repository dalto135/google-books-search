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
            <a href={link} target='_blank' rel='noreferrer'>View</a>
            {/* <a href='/book' title={title} authors={authors} description={description} image={image} link={link}>View</a> */}
            {/* <Link to='/book' title={title} authors={authors} description={description} image={image} link={link}>View</Link> */}
            <button className='favorite'>Add to favorites</button>
        </div>
    </div>
    
  );
}

export default Book;