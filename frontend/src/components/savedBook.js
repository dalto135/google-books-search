import React from 'react';

async function getBooks() {
  let res;
  try {
    res = await fetch("/api/books");
    console.log('res');
    console.log(res);
  } catch (err) {
    console.log(err.message);
    console.log('err.message');
  }
  console.log('past catch');
  const json = JSON.stringify(res);
  // const json = res.json();
  console.log('json');
  console.log(json);

  return json;
}

function savedBook({title, authors, description, image, link}) {
  getBooks();

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
              <button className='favorite'>Remove from saved</button>
            </div>
            
        </div>
    </div>
  );
}

export default savedBook;