import React, { useEffect, useState } from 'react';

// yarn add react-icons
import { IconContext } from "react-icons";
import { FiArrowUpCircle } from 'react-icons/fi';
import './style.scss';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scrollToTop">
      {isVisible && (
        <div onClick={scrollToTop} >
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <h3>
              <FiArrowUpCircle />
            </h3>
            <span className="scrollToTop-text" >
              Haut de page
            </span>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}

export default ScrollTopButton;
