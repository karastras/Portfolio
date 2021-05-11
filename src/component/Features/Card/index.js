import React from 'react'

import './style.scss'


const Card = ({
    title,
    picture,
    text,
    tech,
    url1,
    url2,
    hiddenButton,
}) => {
    return (
        <div className="card">
            <div className="card-left">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-image">
                    <img className="card-img" src={picture} alt=""/>
                </div>
            </div>            
            <div className="card-right">
                <p className="card-text">{text}</p>
                <p className="card-tech">{tech}</p>
                <div className="card-buttons">
                    <button className={hiddenButton ? "card-button-hidden" : "card-button"}><a className="card-button-link" target='_blank' rel='noreferrer' href={url1}>Visiter</a></button>
                    <button className="card-button"><a className="card-button-link" target='_blank' rel='noreferrer' href={url2}>Code source</a></button>
                </div>
            </div>
        </div>
    )
}

export default Card
