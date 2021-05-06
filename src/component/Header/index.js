import React, { useEffect, useState } from 'react';

import unicorn from '../../assets/unicorn.png'
import star from '../../assets/star.png'

import './style.scss';

let picture = star

const Header = () => {
    //function to make a turn on image
    const [turn, setTurn] = useState(true)
    const toggle = () => {setTurn(!turn)}
    let className = 'header-image';
    if(!turn){ className = 'header-image--turn' }

    //function to count how much click on image
    const [nClick, setNClick] = useState(0)
    const count = () => {
        setNClick(total => total +1)
    }

    // condition to change picture
    if (nClick >= 20){
        picture = unicorn;
        className = 'header-image--unicorn';        
    }
    let classNameContainer = ""
    if(className === 'header-image--unicorn') {
        classNameContainer = 'header-picture'
    } 
    
    // function to change header style with scrolling
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
            setSmall(window.pageYOffset > 0)
        );
        }
    }, []);
    
    return (
        <div className={`header ${small ? "header-scrolling" : "header"}`}>
            <div className="header-container">
                <div className={classNameContainer}>
                    <img className={className} src={picture} alt="" onClick={()=>{ toggle(); count();}} onAnimationEnd={()=> toggle()}  />
                </div>           
                <h1 className="header-title" >
                    Jérôme Burrus Portfolio
                </h1>            
                <ul className="header-nav" >
                    <li className="header-link">Accueil</li>
                    <li className="header-link">Parcours</li>
                    <li className="header-link">Projets</li>
                    <li className="header-link">A mon sujet</li>
                </ul>            
            </div>            
        </div>
    )
}

export default Header
