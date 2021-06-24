import React from 'react';

function searchedBooks({input}) {
    console.log('input');
    console.log(input);


    let searchString = 'mindfulness';
    // searchString = input;  
    let requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchString}&key=AIzaSyA7dlRqQYZa0vP9rNnZSTcNJN96Akj8BL0`;
    let booksArray = [];

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
          console.log(data);

          data.items.forEach(element => {
           
            let addImage = '';
            if (element.volumeInfo.imageLinks) {
              addImage = element.volumeInfo.imageLinks.thumbnail;
            }
            else {
              addImage = 'none';
            }

            booksArray.push({
              title: element.volumeInfo.title,
              authors: element.volumeInfo.authors,
              description: element.volumeInfo.description,
              image: addImage,
              link: element.volumeInfo.infoLink
            });
          });
          console.log(booksArray);
        })
        .catch(function(err) {
          console.log(err.message);
        });

  return (
    <p>Searched Book</p>
  );
}

export default searchedBooks;