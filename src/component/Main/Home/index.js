import React from 'react'
import { Link } from 'react-scroll';

import star from '../../../assets/images/hole.png'

import './style.scss'

const Home = () => {
    return (
        <div id="Home" className="home">
            <div className="home-container">
                <div className="home-content">
                    <section className="home-left">
                        <p className="home-slogan">New challenger!</p>
                        <img src={star} alt="" className="home-image" />
                    </section>
                    <section className="home-right">
                        <h2 className="home-title">“ On ne peut apprendre le code web, on ne peut qu’apprendre à coder ”</h2>
                        <p  className="home-text">
                            Cette citation d'Emmanuel Kant, détourné de son contenu original en rapport
                            avec la philosophie, est l'image même de cet océan de connaissances dans lequel on se plonge en
                            choisissant de devenir développeur.
                        </p>
                        <p  className="home-text">
                            C'est ce que j'ai appris de ma formation à l'école <a target='_blank' rel='noreferrer' href="https://oclock.io/">O'clock</a>*.<br />
                            Les connaissances à assimiler sont sans limites et ce qui est valable aujourd'hui ne le sera peut-être plus demain. Alors plutôt que de 
                            se forcer à tout assimiler, il faut apprendre à comprendre les logiques des langages utilisés, l'utilité
                            des différentes librairies et frameworks, savoir comment chercher l'information dont on a besoin et 
                            également connaître la méthodologie d'organisation dans son code ainsi qu'au au sein d'une équipe de développement.
                        </p>
                        <p  className="home-text">
                            Hier je ne connaissais rien, aujourd'hui je sais mettre en application ce que j'ai appris et demain je pourrai
                            maintenir et améliorer mes projets en utilisant les nouvelles pratiques et technologies qui seront les plus efficientes du moment.
                        </p>
                    </section>
                </div>
                <div className="home-foot">
                    <Link  className="home-scroll" smooth to="Career">
                        <span className="home-scroll-icon">
                            <span className="home-scroll-icon-out">
                                <span className="home-scroll-icon-in">
                                </span>
                        </span>
                        </span>
                        <h2 className="home-foot-text">La suite</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
