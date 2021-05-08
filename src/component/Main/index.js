import React from 'react'
import Carrer from './Career'
import Home from './Home'
import Projects from './Projects'
import About from './About'

import './style.scss'

const Main = () => {
    return (
        <div className="main">
            <Home />
            <Carrer />
            <Projects />
            <About />
        </div>
    )
}

export default Main
