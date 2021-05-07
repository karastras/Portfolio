import React, { useEffect, useState } from 'react';

import PC from '../../assets/pc.png'
import unicorn from '../../assets/unicorn.png'
import star from '../../assets/star.png'

import './style.scss';

let picture = star

const Header = ( { open, opened } ) => {
    
    //function to make a turn on image
    const [turn, setTurn] = useState(true)
    const toggle = () => {setTurn(!turn)}
    let className = 'header-close';
    if (open){className = 'header-image'}
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
        <div className={`header ${small ? "header-scrolling" : "header"} ${open ? "header" : "header-closed"}`}>
            <div className={`${open ? "header-container" : "header-closed"}`}>
                <div className={classNameContainer}>
                    <img className={className} src={picture} alt="" onClick={()=>{ toggle(); count();}} onAnimationEnd={()=> toggle()}  />
                    <img className={`${open ? "header-close" : "header-pc"}`}  src={PC} alt=""  />
                </div>
                <div className="header-intro">
                    <div className="header-me">
                        <p className={`${open ? "header-close" : "header-text"}`} >
                            Hello there! I'm
                        </p>
                        <h1 className="header-title" >
                            Jérôme Burrus
                        </h1>
                        <p className={`${open ? "header-portfolio" : "header-close"}`} >
                            Portfolio
                        </p>
                    </div>
                    <p className={`${open ? "header-close" : "header-text"}`} >
                        I'm front developper
                    </p>           
                </div>
                <button className={`${open ? "header-close" : "header-button"}`} onClick={opened} >c'est partis !</button>           
                <ul className={`${open ? "header-nav" : "header-close"}`} >
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
