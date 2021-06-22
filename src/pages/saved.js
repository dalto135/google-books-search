import React from 'react';
import SavedBook from '../components/savedBook';

function Saved() {
  return (
    <div className='page'>
        <h2>Saved</h2>
        <div className='books'>
            <SavedBook/>
            <SavedBook/>
        </div>
        
    </div>
    
  );
}

export default Saved;