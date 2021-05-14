import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Error404 from '../Error404'

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
      <Switch>
        <Route exact path='/'>          
          <Header enter={enter} entered={entered}/>
          {enter && <Main/>  }        
          {enter && <Footer/>  }            
          {enter && <ScrollTopButton /> }
        </Route>
        <Route component={Error404}/>      
      </Switch>
    </div>
  );
}

export default App;
