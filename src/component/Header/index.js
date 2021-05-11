import React, { useEffect, useState } from 'react';

import Burger from '../Features/Burger'

import PC from '../../assets/images/pc.png'
import cat from '../../assets/images/cat.png'
import unicorn from '../../assets/images/unicorn.png'
import star from '../../assets/images/star.png'

import './style.scss';

let picture01 = PC
let picture02 = star

const Header = ( { enter, entered } ) => {
    
    //function to make a turn on image
    const [turn, setTurn] = useState(true)
    const toggle = () => {setTurn(!turn)}
    let className = 'header-enter';
    if (enter){className = 'header-image'}
    if(!turn){ className = 'header-image--turn' }

    //function to count how much click on image    
    const [pcClick, setPcClick] = useState(0)
    const count01 = () => {
        setPcClick(total => total +1)
    }    
    
    const [starClick, setStarClick] = useState(0)
    const count02 = () => {
        setStarClick(total => total +1)
    }
    
    // condition to change picture
    if (pcClick >= 10){
        picture01 = cat;        
    }
    if (starClick >= 20){
        picture02 = unicorn;
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
    
    return (  // id="home" to fix issue activeclass on first render
        <div id={`${small ? "" : "Home"}`} className={`header ${small ? "header-scrolling" : "header"} ${enter ? "header" : "header-before"}`}>
            <div className={`${enter ? "header-container" : "header-before"}`}>
                <div className={classNameContainer}>
                    <img className={className} src={picture02} alt="" onClick={()=>{ toggle(); count02();}} onAnimationEnd={()=> toggle()}  />
                    <img className={`${enter ? "header-enter" : "header-pc"}`}  src={picture01}  alt="" onClick={count01} />
                </div>
                <div className="header-content">
                    <div className="header-intro">
                        <p className={`${enter ? "header-enter" : "header-text"}`} >
                            Hello User ! Moi c'est 
                        </p>
                        <div className="header-me">
                            <h1 className={`${enter ? "header-title header-reduce" : "header-title"}`} >
                                Jérôme Burrus
                            </h1>
                            <p className={`${enter ? "header-portfolio" : "header-enter"}`} >
                                Portfolio
                            </p>
                        </div>
                    </div>
                    <p className={`${enter ? "header-enter" : "header-text"}`} >
                        et je suis &lt;
                        <span className="header-front">Developer </span>
                        props=&#x7B;
                        <span className="header-dev"> front</span> &#125; /&gt;
                    </p>           
                </div>
                <button className={`${enter ? "header-enter" : "header-button"}`} onClick={entered} >Go!</button>                
                <div className={`${enter ? "header-nav" : "header-enter"}`} >
                   <Burger /> 
                </div>            
            </div>            
        </div>
    
    )
}

export default Header
