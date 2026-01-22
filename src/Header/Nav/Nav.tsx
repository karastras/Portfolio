import { Link } from 'react-scroll'

import './nav.scss'

interface Props {
    open: boolean
    closed: ()=> void
}

const Nav = ({open, closed}: Props) => {
  
    return(
        <div className="nav" >
            <ul className={open ? 'nav-list nav-list--open' : 'nav-list nav-list--closed'}>               
                <li >
                    <Link activeClass="active" className="nav-links" spy={true} smooth to="Home" onClick={closed} >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" activeClass="active" spy smooth offset={-120} to="Career" onClick={closed} >
                        Parcours
                    </Link>
                </li>
                <li >
                    <Link className="nav-links" activeClass="active" spy smooth offset={-100} to="Projects" onClick={closed} >
                        Projets
                    </Link>
                </li>
                <li >
                    <Link className="nav-links" activeClass="active" spy smooth offset={-120} to="About" onClick={closed} >
                        A mon sujet
                    </Link>
                </li>
            </ul>               
        </div>        
    )
}


export default Nav