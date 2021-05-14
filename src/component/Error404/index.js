import React from 'react'

import error from '../../assets/images/error.png'
import './style.scss'

const Error404 = () => {
    return (
        <div className="error">
            <div className="error-content">
                <h2 className="error-content-title">
                    Erreur 404 !
                </h2>
                <img className="error-content-img" src={error} alt="" />
                <div className="error-content-text">
                    Cette page n'existe pas, merci de revenir à l'accueil avec le bouton ci-dessous
                </div>
                <a href='/'>

                <button className="error-content-button">Back!</button>
                </a>
            </div>
        </div>
    )
}

export default Error404
