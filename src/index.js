import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import SearchBar from './components/SearchBar';
import Article from './components/Article';
import Tutorial from './components/Tutorial';
import SignUp from './components/SignUp';
import Nav from './components/Nav';

ReactDOM.render(
  <body>
    <SearchBar />
    <div>
      <img className='image' src={'https://picsum.photos/id/100/200'} />
    </div>
    <p className='feature_text'>Featured Acticles</p>
    <Article />
    <button className='see_text'>See all articles</button>
    <p className='feature_text'>Featured Tutorials</p>
    <Tutorial />
    <button className='see_text'>See all tutortials</button>
    <SignUp />
    <Nav />
  </body>,

  document.getElementById('root')
);
