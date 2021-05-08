import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import './style.scss';


const Nav = ({open, closed}) => {
  
    return(
        <div className="nav" >
            <ul className={open ? 'nav-list nav-list--open' : 'nav-list nav-list--closed'}>               
                <li onClick={closed} >
                    <Link activeClass="active" className="nav-links" spy={true} smooth to="Home">
                        Accueil
                    </Link>
                </li>
                <li onClick={closed} >
                    <Link className="nav-links" activeClass="active" spy smooth to="Career">
                        Parcours
                    </Link>
                </li>
                <li onClick={closed} >
                    <Link className="nav-links" activeClass="active" spy smooth to="Projects">
                        Projets
                    </Link>
                </li>
                <li onClick={closed} >
                    <Link className="nav-links" activeClass="active" spy smooth to="About">
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