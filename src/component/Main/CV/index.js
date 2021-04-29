import React from 'react'
import star from '../../../assets/star.png'

import './style.scss'

const CV = () => {
    return (
        <div className="cv">
            <section className="cv-left">
                <p  className="cv-slogan">Faut bien commencer quelque part !</p>
                <img src={star} alt="" className="cv-image" />
            </section>
            <section className="cv-right">
                <h2  className="cv-title">Un Petit mot de Mouah</h2>
                <p  className="cv-text">Exercitation aute sint exercitation aliqua reprehenderit culpa exercitation ut qui sit.
                    Est nostrud sint qui nostrud id in laborum consectetur. Laboris velit quis irure minim 
                    officia ullamco proident pariatur id.
                </p>
            </section>

        </div>
    )
}

export default CV
