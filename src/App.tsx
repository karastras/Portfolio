import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Error404 from './Error404/Error404'
import ScrollTopButton from './Features/ScrollTopButton/ScrollTopButton'
import styles from './app.module.scss'

function App() {

  // Display Welcome or rest of App
  const [enter, setEnter] = useState(false)
  // end time appears the button Go
  const entered = () => {
    setTimeout(() => {
    setEnter(true)
    }, 400);  
  }
  
  const [ shaked, setShaked ] = useState(false)
  const isShake = () => {setShaked(true)}

  return (
    <div className={ shaked ? `${styles.app} ${styles.shake}` : styles.app} >
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