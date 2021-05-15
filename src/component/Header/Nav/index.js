import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import './style.scss';


const Nav = ({open, closed}) => {
  
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

Nav.propTypes = {
    open: PropTypes.bool.isRequired,
    closed: PropTypes.func.isRequired,
}


export default Nav