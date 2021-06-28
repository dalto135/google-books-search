import React from 'react';

function savedBook({_id, title, authors, description, image, link}) {
  // let books = [];

  let bookDiv = document.createElement('div');
  bookDiv.classList.add('bookdiv');

  let img = document.createElement('img');
  img.setAttribute('src', {image});
  img.setAttribute('alt', {image});
  bookDiv.appendChild(img);

  let bookText = document.createElement('div');
  bookText.classList.add('booktext');
  bookDiv.appendChild(bookText);

  let bookTitle = document.createElement('p');
  bookTitle.innerHTML = {title};
  bookText.appendChild(bookTitle);

  let authorsTag = document.createElement('p');
  authorsTag.innerHTML = 'Author(s)';
  bookText.appendChild(authorsTag);

  let authorsList = authors.map(author =>
    <p key={Math.random()}>{author}</p>
  )

  // console.log(authorsList);

  bookText.innerHTML += (authorsList);

  let descriptionTag = document.createElement('p');
  descriptionTag.innerHTML = 'Description: ' + {description};
  bookText.appendChild(descriptionTag);

  let favClicks = document.createElement('div');
  favClicks.classList.add('favclicks');
  bookText.appendChild(favClicks);

  let bookLink = document.createElement('a');
  bookLink.setAttribute('href', {link});
  bookLink.setAttribute('target', '_blank');
  bookLink.setAttribute('rel', 'noreferrer');
  bookLink.innerHTML = 'View';
  favClicks.appendChild(bookLink);

  let bookButton = document.createElement('button');
  bookButton.classList.add('favorite');
  bookButton.setAttribute('id', {_id});
  bookButton.innerHTML = 'Remove from saved';
  favClicks.appendChild(bookButton);


  // books.map(book => {
    // let button = document.getElementById(_id);
    bookButton.addEventListener('click', function() {

      
    })
  // })
    // console.log(bookDiv);

    function deleteFavorite() {
      fetch(`/api/books/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

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
              <button className='favorite' id={_id} onClick={deleteFavorite}>Remove from saved</button>
            </div>
            
        </div>
    </div>

    
  );
}

export default savedBook;