import React from 'react'

import glass from '../../../assets/images/glass.png'

import './style.scss'

const About = () => {
    return (
        <div id="About" className="about">
            <div className="about-image">
                    <img className="about-img" src={glass} alt=""/>
            </div>
            <h1 className="about-title">
                    A mon sujet
            </h1>
            <div className="about-content">
                <p className="about-text">
                    Passionné également par le multimédia (cinéma, musique, jeux vidéo, infomatique,...), j'ai commencé il y a + de 10 ans à m'intéresser aux entrailles
                    des ordinateurs. Processeur, carte mère, ram, carte graphique .... ces petits bijoux de technologies n'ont
                    que très peu de secret pour moi. Le but ultime: un maximum de puissance pour un minimum de bruit, le tout avec
                    une petite touche de kéké-tuning. Mais il me manquait quelque chose, d'être créatif derrière un écran. Mais que
                    faire ??? Du graphisme, du montage vidéo, de la programmation, du développement web,...<br /> 
                    J'ai choisi développeur web car j'ai toujours eu un penchant pour les systèmes de logiques et un côté créatif que
                    je peux exprimer librement dans mes projets personnels. J'ai par le passé créé plusieurs projets avec des platformes
                    de création "clef-en-main", mais j'ai toujours eu envie de savoir comment tout
                </p>
                <p>

                </p>
            </div>
        </div>
    )
}

export default About
