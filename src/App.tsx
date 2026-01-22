import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Error404 from './Error404/Error404'
import ScrollTopButton from './Features/ScrollTopButton/ScrollTopButton'
import './app.scss'

function App() {

  let appClass = "App-welcome"
  // Display Welcome or rest of App
  const [enter, setEnter] = useState(false)
  // end time appears the button Go
  const entered = () => {
    setTimeout(() => {
    setEnter(true)
    }, 400);  
  }
  
  const [ shake, setShake ] = useState(false)
  const isShake = () => {setShake(true)}

  if(enter){appClass = "App"}
  if(shake){appClass = "App-shake"}

  return (
    <div className={appClass} >
      <Routes>   
          <Route path='/' element={
            <> 
              <Header enter={enter} entered={entered}/>
              {enter && <>
                <Main isShake={isShake}/>
                <Footer/>
                <ScrollTopButton />
              </>
              }
            </>
            }
          />
          <Route path="*" Component={Error404}/>      
      </Routes>
    </div>
  );
}

export default App;
