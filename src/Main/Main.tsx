import Carrer from './Career/Career'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import About from './About/About'

import './main.scss'

interface Props {
  isShake: ()=>void
}

const Main = ({isShake}: Props) => {
    return (
        <div className="main">
            <Home />
            <Carrer />
            <Projects />
            <About isShake={isShake}/>
        </div>
    )
}

export default Main
