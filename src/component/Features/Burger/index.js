import React, { useEffect, useState } from 'react';

import Nav from '../../Header/Nav';

import './style.scss'

const Burger = () => {
    // function to toggle between open/close the burger menu
  const [open, setOpen] = useState(false)
  const toggle = () => { setOpen(!open) }

  // function to close the burger menu when clicking on link-nav
  const closed = () => { setOpen(false) }

  // try to apply 'postion: fixed' on app but does some display issues with empty or 
  //  light component when i open/close the burger menu. Can't apply hoverflow style 
  // directly on app, so this solution works fine to apply it on body:
  // burger open = prevent scrolled background
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

    return (
        <div className="burger">
            <button className={ open ? 'burger-button burger-button--open ' : 'burger-button burger-button--closed'} onClick={toggle}>
              <div className={ open ? 'burger-style burger-style--open--1 ' : 'burger-style'}/> 
              <div className={ open ? 'burger-style burger-style--open--2 ' : 'burger-style'}/> 
              <div className={ open ? 'burger-style burger-style--open--3 ' : 'burger-style'}/>                    
              <div className="burger-style-text">
                  Menu
              </div>
            </ button >
              <div className="burger-nav">
                  <Nav open={open} closed={closed}  />
              </div>
        </div>
    )
}

export default Burger


