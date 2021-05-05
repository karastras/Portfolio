import React from 'react'
import CV from './CV'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

import './style.scss'

const Main = () => {
    return (
        <div className="main">
            <Home />
            <CV />
            <Projects />
            <Skills />
        </div>
    )
}

export default Main
