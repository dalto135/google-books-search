import React from 'react';
import SavedBook from '../components/savedBook';
// import APICAll from '../routes/apiCalls';
// import API from '../api';


// async function hello() {
//   // const htmlRoutes = {
//     // async getBooks() {
//         const res = await fetch(`/api/books`);
//         const json = await res.json();
//         console.log('json');
//         console.log(json);
//         return json;
//     // }
// // }
// }

// fetch("/api/books", {
//   method: "GET",
//   body: JSON.stringify(),
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "Content-Type": "application/json"
//   },
// })
// .then(response => {
//   console.log('response');
//   console.log(response);
//   return response.json();
// })
// .then(data => {
//   console.log('data');
//   console.log(data);
// })
// .catch(err => {
//   console.log(err.message);
// });



function Saved() {
  // API.getBooks();

  return (
    <div className='page'>
        <h2>Saved</h2>
        <div className='books'>
            <SavedBook title={'title1'} authors={['authors1']} description={'description1'} image={'Image unavailable'} link={'link1'}/>
            <SavedBook title={'title2'} authors={['authors2']} description={'description2'} image={'Image unavailable'} link={'link2'}/>
        </div>
        
    </div>
    
  );
}

export default Saved;