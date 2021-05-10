import React, { useState } from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import ScrollTopButton from '../Features/ScrollTopButton'

import './style.scss';


function App() {

  // Display Welcome or rest of App
  const [enter, setEnter] = useState(false)
  // timer to see the little animation on the button
  const entered = () => {
  setTimeout(()=> {
    setEnter(true)
    }, 400);  
  }
  
  return (
    <div className= { enter ? "App" : "App-welcome" } >

        <Header enter={enter} entered={entered} />      
        {enter && <Main />  }
        {enter && <Footer /> }
        {enter && <ScrollTopButton /> }
    </div>
  );
}

export default App;
