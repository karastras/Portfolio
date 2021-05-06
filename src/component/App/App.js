import React from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import ScrollTopButton from '../Features/ScrollTopButton'

import './style.scss';


function App() {
  
  return (
    <div className="App">     
        <Header  />      
        <Main />
        <Footer />
        <ScrollTopButton />
    </div>
  );
}

export default App;
