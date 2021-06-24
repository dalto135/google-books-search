import React, { useEffect, useState } from 'react';
import Book from './Book';
import axios from "axios";

function SearchedBooks({input}) {
    console.log('input1');
    console.log(input);

    let requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyA7dlRqQYZa0vP9rNnZSTcNJN96Akj8BL0`;

    const [results, setResults] = useState([]);

    useEffect(() => {
      axios.get(requestUrl)
            .then(res => {
                setResults(res.data.items);
            })            
            .catch(err => console.log(err.message));
    }, [requestUrl])
    console.log('results');
    console.log(results);

    let booksArray = [];

    results.forEach(book => {

      //Set title variable
      let addTitle = '';
      if (book.volumeInfo.title) {
        addTitle = book.volumeInfo.title;
      }
      else {
        addTitle = 'No title';
      }

      //Set authors variable
      let addAuthors = [];
      if (book.volumeInfo.authors) {
        addAuthors = book.volumeInfo.authors;
      }
      else {
        addAuthors = ['None'];
      }

      //Set description variable
      let addDescription = '';
      if (book.volumeInfo.description) {
        addDescription = book.volumeInfo.description;
      }
      else {
        addDescription = 'None';
      }

      //Set image variable
      let addImage = '';
      if (book.volumeInfo.imageLinks) {
        addImage = book.volumeInfo.imageLinks.thumbnail;
      }
      else {
        addImage = 'None';
      }

      //Set link variable
      let addLink = '';
      if (book.volumeInfo.infoLink) {
        addLink = book.volumeInfo.infoLink;
      }
      else {
        addLink = 'None';
      }

      booksArray.push({
        title: addTitle,
        authors: addAuthors,
        description: addDescription,
        image: addImage,
        link: addLink
      })
    })
        
    console.log('booksArray');
    console.log(booksArray);

  return (
    <div className='searchedbooks'>

      {booksArray.map(book => (
        <div className='book' key={Math.random()}>
          <Book title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.link}/>
        </div>
      ))}

    </div>
    
  );
}

export default SearchedBooks;