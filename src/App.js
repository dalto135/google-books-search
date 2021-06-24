import React from 'react';
// import React, { useEffect, useState } from 'react';
// import API from './utils/API';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Search from './pages/search';
import Saved from './pages/saved';

function App() {
  // const [results, setResults] = useState([]);


  //   useEffect(() => {
  //       API.getList()
  //           .then(res => {
  //               setResults(res.data.results);
  //           })            
  //           .catch(err => console.log(err.message));
  //   }, [])

    // console.log(results);
    
    // let searchString = 'mindfulness';
    // let requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchString}&key=AIzaSyA7dlRqQYZa0vP9rNnZSTcNJN96Akj8BL0`;
    // let booksArray = [];

    // fetch(requestUrl)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //       console.log(data);

    //       data.items.forEach(element => {
           
    //         let addImage = '';
    //         if (element.volumeInfo.imageLinks) {
    //           addImage = element.volumeInfo.imageLinks.thumbnail;
    //         }
    //         else {
    //           addImage = 'none';
    //         }

    //         booksArray.push({
    //           title: element.volumeInfo.title,
    //           authors: element.volumeInfo.authors,
    //           description: element.volumeInfo.description,
    //           image: addImage,
    //           link: element.volumeInfo.infoLink
    //         });
    //       });
    //       console.log(booksArray);
    //     })
    //     .catch(function(err) {
    //       console.log(err.message);
    //     });

  return (
    <Router>
      <Header/>
      <Route exact path='/' component={Search}/>
      <Route exact path='/saved' component={Saved}/>
    </Router>
  );
}

export default App;
