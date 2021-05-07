import React, { useState } from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import ScrollTopButton from '../Features/ScrollTopButton'

import './style.scss';


function App() {

  // Display Welcome or rest of App
  const [open, setOpen] = useState(false)
  const opened = () => {
    setOpen(!open)
  }
  
  return (
    <div className= { open ? "App" : "App-welcome" } >

        <Header open={open} opened={opened} />      
        {open && <Main />  }
        {open && <Footer /> }
        {open && <ScrollTopButton /> }
    </div>
  );
}

export default App;
