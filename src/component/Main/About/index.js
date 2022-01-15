import React, { useState } from 'react'

import glass from '../../../assets/images/glass.png'
import rocket from '../../../assets/images/rocket.png'
import astro from '../../../assets/images/astro.png'
import end from '../../../assets/images/end.png'
import react from '../../../assets/images/react.svg'
import symfony from '../../../assets/images/symfony.png'

import { GoAlert } from 'react-icons/go'

import './style.scss'



const About = ({ isShake }) => {


    // action on Start button
    const [clickStart, setClickStart] = useState(false)
    // display of Go button
    const [isButtonGo, setIsButtonGo] = useState(false)
    // action on Go button
    const [isGo, setIsGo] = useState(false)
    // change picture
    const [astroPic, setAstroPic] = useState(false)
    // animation final AstoFloat
    const [isAstro, setIsAstro] = useState(false)
    // count to change picture
    const [astroClick, setAstroClick] = useState(0)

    // picture end of page
    let picture = rocket
    // Classname
    let classStart = "about-content-img"
    let classButtonStart = "about-content-startButton"
    let classButtonGo = "about-content-hidden"
    let endAltPicture = "avatar dans fusée rouge"

    // launch Start animation + go button appears after x time
    const start = () => {
        setClickStart(true);
        setTimeout(() => {
            setIsButtonGo(true)
        }, 1000);
    }
    // launch Start animation 
    if (clickStart) {
        classStart = "about-content-start";
    }
    // appears go-button + hidden start-button
    if (isButtonGo) {
        classButtonGo = "about-content-goSection"
        classButtonStart = "about-content-hidden"
    }

    // launch Go animation + cancel start-animation
    const go = () => {
        setClickStart(false)
        setIsGo(true)
    }
    // launch Go animation + prepare switch picture
    if (isGo) {
        classStart = "about-content-go";
        document.body.style.overflowX = 'hidden'; // fix issue in animation           
        setTimeout(() => {
            setTimeout(() => { isShake() }, 2000);
            setTimeout(() => { setAstroPic(true) }, 2000)
        })
    }
    // after Go animation, switch picture with astro and launch enterastro animation 
    if (astroPic) {
        picture = astro
        classButtonGo = "about-content-hidden"
        classStart = "about-content-enterAstro"
        endAltPicture = "avatar astronaute flottant dans l'espace"
        setTimeout(() => { setIsAstro(true) }, 6500);
    }
    // launch astrofloat animation
    if (isAstro) {
        classStart = "about-content-final"
        document.body.style.overflowX = 'unset';
    }
    // count to change astro picture
    const count03 = () => {
        setAstroClick(total => total + 1)
    }
    if (astroClick >= 10) {
        picture = end
        endAltPicture = "avatar quittant la scène en lâchant le micro derrière lui, un micro drop"
        classStart = "about-content-img"
    }
    return (
        <div id="About" className="about">
            <div className="about-image">
                <img className="about-img" src={glass} alt="avatar tenant une loupe géante" />
            </div>
            <h1 className="about-title">
                A mon sujet
            </h1>
            <div className="about-content">
                <h3 className="about-content-title">
                    Du Hard au Soft:
                </h3>
                <p className="about-content-text">
                    Passionné par le multimédia (cinéma, musique, jeux vidéo, infomatique,...), j'ai commencé il y a + de 10 ans à m'intéresser aux entrailles
                    des ordinateurs, le Hardware.
                </p>
                <p className="about-content-text">
                    Processeur, carte mère, ram, carte graphique .... ces petits bijoux de technologies n'ont
                    que très peu de secret pour moi. Le but ultime: un maximum de puissance pour un minimum de bruit, le tout avec
                    une petite touche de design. Mais il me manquait quelque chose, d'être créatif derrière un écran. Mais que
                    faire ??? Graphiste, monteur vidéo, programmeur logiciel, développeur web,...
                </p>
                <p className="about-content-text">
                    Après un bilan de compétence, j'ai choisi la voie de développeur web car j'ai toujours eu des affinités avec les systèmes
                    de logiques, un côté créatif que je peux exprimer librement dans mes projets personnels. Par le passé, j'ai créé plusieurs
                    projets avec des platformes de création "clef-en-main", mais avec une frustration de ne pas comprendre comment fonctionnait
                    en coulisses les pages web.
                </p>
                <p className="about-content-text">
                    Aujourd'hui je peux avancer dans ce domaine avec les bases de ma formation de développeur web et web mobile, continuer à évoluer
                    à l'aide des contenus présents sur le net, ainsi que les différentes communautés et enfin rejoindre une équipe de développement.
                </p>
                <p className="about-content-text">
                    Mes différentes expériences professionnelles m'ont permis d'affiner mes atouts:<br />
                    <span className="about-content-important">
                        Soif de connaissance, adaptabilité, rigueur, organisation, travail en équipe, recherche de challenge et source de propositions
                    </span>
                    &nbsp;sont mes attributs qui seront nécessaires pour un futur emploi de développeur web.
                </p>
                <p className="about-content-text">
                    Ma formation m'a ammené à me spécialiser dans le&nbsp;
                    
                    <span className="about-content-important">
                        Front
                        <img className="about-reactLogo" src={react} alt="React Logo"/>
                        &gt; React.JS. 
                    </span>
                    <br />

                   
                    J'ai également suivis une formation sur la technologie&nbsp;
                    <span className="about-content-important">
                        Back&nbsp;
                        <img className="about-symfonyLogo" src={symfony} alt="React Logo"/>
                        &gt; Symfony.
                    </span>
                    <br />Je peux alors avoir un statut de&nbsp;
                    <span className="about-content-important">
                        développeur Fullstack&nbsp;
                    </span>
                    et développer des projets sur les deux pôles.
                </p>
                <h3 className="about-content-title">
                    Géolocalisation:
                </h3>
                <p className="about-content-text">
                    Je suis mobile et ouvert à un emploi où qu'il soit, en France et à l'étranger.<br />
                    Vous trouverez en bas de page les différents moyens pour me contacter.
                </p>
                <p className="about-content-end">
                    Merci d'avoir pris le temps de découvrir mon portfolio
                </p>
                <div className="about-content-picture">
                    <div className="about-content-buttons">
                        <button className={classButtonStart} onClick={start}>
                            Start
                        </button>
                        <div className={classButtonGo}>
                            <GoAlert className="about-content-alert" />
                            <button className="about-content-goButton" onClick={go}>
                                Go!
                            </button>
                        </div>
                    </div>
                    <div className="about-content-image">
                        <img className={classStart} src={picture} onClick={isAstro ? count03 : undefined} alt={endAltPicture} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
