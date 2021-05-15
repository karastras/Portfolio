import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

import './style.scss';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-icons">
                    <a className="footer-linked" target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-burrus-28855b192/">
                        <FaLinkedin />
                    </a>
                    <a className="footer-Gmail" href="mailto:burrus.jerome.oc@gmail.com">
                        <CgMail />
                    </a>
                </div>               
                <div>
                    <p className="footer-text">
                        E-mail:&nbsp;
                        <a className="footer-mail" href="mailto:burrus.jerome.oc@gmail.com">
                            burrus.jerome.oc@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
