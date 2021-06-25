import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Search from './pages/search';
import Saved from './pages/saved';

//  Portfolio link
//  https://dalto135.github.io/portfolio/

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={Search}/>
      <Route exact path='/saved' component={Saved}/>
    </Router>
  );
}

export default App;
