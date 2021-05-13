import React, { useState } from 'react'

import glass from '../../../assets/images/glass.png'

import bye from '../../../assets/images/bye.png'
import astro from '../../../assets/images/astro.png'

import './style.scss'


let picture = bye
const About = () => {
    
    // action on Start button
    const [ clickStart, setClickStart ] = useState(false)
    // display of Go button
    const [ isButtonGo, setIsButtonGo] = useState(false)
    // action on Go button
    const [ isGo, setIsGo ] = useState(false)
    // change picture
    const [ pic, setPic ] = useState(false)
    // animation final AstoFloat
    const [ isAstro, setIsAstro ] = useState(false)
    // Classname
    let classStart = "about-content-img"
    let classButtonStart = "about-content-startButton"
    let classButtonGo = "about-content-hidden"

    // launch Start animation + go button appears after x time
    const start = () => {
        setClickStart(true);
        setTimeout(()=> {
            setIsButtonGo(true)
            }, 1000);
    }
    // launch Go animation + hidden start-button 
    const go = () => {
        setClickStart(false)
        setIsGo(true)        
    }
    // launch Start animation 
    if(clickStart){
        classStart = "about-content-start";
    }
    // appears go-button + hidden start-button
    if(isButtonGo){
        classButtonGo = "about-content-goButton"
        classButtonStart = "about-content-hidden"
    }
    
    // launch Go animation
    if(isGo){
        classStart = "about-content-go";
        document.body.style.overflowX = 'hidden';
        setTimeout(() => { setPic(true) }, 2500);
    }

    // after Go animation, picture change and launch final aniamtastro
    if(pic){
        picture= astro
        classButtonGo = "about-content-hidden"
        classStart = "about-content-enterAstro"
        setTimeout(() => { setIsAstro(true) }, 3500);
    }
    if(isAstro){
        classStart = "about-content-final"
    }
    return (
        <div id="About" className="about">
            <div className="about-image">
                    <img className="about-img" src={glass} alt=""/>
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
                    de logiques, un côté créatif que je peux exprimer librement dans mes projets personnels et, par le passé, j'ai créé plusieurs
                    projets avec des platformes de création "clef-en-main", mais avec une frustration de ne pas comprendre comment fonctionnait
                    en coulisse les pages web.
                </p>
                <p className="about-content-text">
                    Aujourd'hui je peux avancer dans ce domaine avec les bases de ma formation de développeur web et web mobile, continuer à évoluer 
                    à l'aide des contenus présent sur le net, ainsi que les différentes communautés et enfin rejoindre une équipe de développement.
                </p>
                <p className="about-content-text">
                    Mes différentes expériences professionnelles m'ont permis d'affiner mes atouts:<br/>
                    <span className="about-content-important">Soif de connaissance, adaptabilité, rigeur, organisation, travail en équipe, recherche de challenge et source de propositions </span>
                    sont mes attributs
                    qui seront des atouts nécessaires pour un futur emploi de développeur web. Même si ma formation m'a ammené à me spécialiser dans
                    le Front -&gt; REACT.js, je veux approfondir mes connaissances en Back.<br/>
                    Mon but à terme est de devenir un développeur web fullstack.
                </p>
                <h3 className="about-content-title">
                    Géolocalisation:
                </h3>
                <p className="about-content-text">
                    Je suis mobile et ouvert à un emploi où qu'il soit, en France et en Suisse.<br/>
                    Vous trouverez en bas de page les différents moyens de me contacter.
                </p>
                <p className="about-content-end">   
                    Merci d'avoir pris le temps de découvrir mon portfolio
                </p>
                <div className="about-content-picture">
                    <div className="about-content-buttons">
                        <button className={classButtonStart} onClick={start}>
                            Start
                        </button>
                        <button className={classButtonGo} onClick={go}>
                            Go!
                        </button>                            
                    </div>
                    <div className="about-content-image">
                        <img className={classStart} src={picture} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
