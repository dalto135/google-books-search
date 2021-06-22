import React from 'react';
import SavedBook from '../components/savedBook';

function Saved() {
  return (
    <div className='page'>
        <h1>Saved</h1>
        <div className='books'>
            <SavedBook/>
            <SavedBook/>
        </div>
        
    </div>
    
  );
}

export default Saved;