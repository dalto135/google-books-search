import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='header'>
        <h1>Google Books Search</h1>
        <div id='links'>
            <Link to='/'>Search</Link>
            <Link to='/saved'>Saved</Link>
        </div>
        
    </div>
    
  );
}

export default Header;