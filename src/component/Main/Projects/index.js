import React from 'react'

import ProjectCard from '../../Features/ProjectCard'

import prana from '../../../assets/images/prana.jpg'
import project from '../../../assets/images/project.png'
import portfolio from '../../../assets/images/portfolio.jpg'
import myFlix from '../../../assets/images/myflix.png'
import react from '../../../assets/images/react.svg'
import symfony from '../../../assets/images/symfony.svg'
import redux from '../../../assets/images/redux.svg'

import './style.scss'

const Projects = () => { 
    return (
        <div id="Projects" className="project">
            <div className="project-image">
                <img className="project-img" src={project} alt="avatar avec un sourire tenant une boite qui présente son projet, une réprésentation du système solaire fabriquée à la main"/>
            </div>
            <h2 className="project-title">
                Mes projets
            </h2>
            <div className="project-cards">
                <div className="project-card01">
                    <ProjectCard  
                        title="Prana -site vitrine-"
                        picture={prana}
                        alt= "miniature du site vitrine prana représentant la page d'acceuil"
                        text="Site vitrine pour un institut de soin biologique. Le délai accordé pour monter le projet
                        était de 4 semaines. Le graphisme, les polices de caractères et les différentes informations 
                        comme les tarifs étaient à reprendre de l'ancienne version du site. Le site est publié. L'historique
                        du site est dans ses mentions légales. Le site est publié via Netlify."
                        logo1={react}
                        alt1="logo react"
                        tech="Réalisé avec: REACT"
                        url1="https://example-prana.netlify.app/" 
                        url2="https://github.com/karastras/Prana"
                    />
                </div>
                <div className="project-card02">
                    <ProjectCard   
                        title="My Travel Road"
                        videoUrl = "https://www.youtube.com/embed/H0ChNO5qkMM"
                        text="Site créé en fin de formation O'clock dans les conditions réelles
                        d'entreprise dans une équipe de 5 personnes. Méthode Agile-Scrum, Rôle: Product Owner. Site en
                        cours de développement. Vous pouvez consulter la présentation de fin de formation."
                        logo1={symfony}
                        alt1="logo symfony"
                        logo2={react}
                        alt2="logo react"
                        logo3={redux}
                        alt3="logo redux"                       
                        tech="Back: SYMFONY <-> Front: REACT/REDDUX"
                        url1="https://www.youtube.com/watch?v=H0ChNO5qkMM&t=3s" 
                        url2="https://github.com/karastras/MyTravelRoad"
                    />
                </div>
                <div className="project-card03">
                    <ProjectCard   
                        title="Portfolio"
                        picture={portfolio}
                        alt = "miniature du site portfolio représentant la page d'acceuil"
                        text="Dossier personnel dans lequel les acquis de formation et les acquis d'expérience
                        sont définis et démontrés en vue d'une reconnaissance par un établissement d'enseignement
                        ou un employeur. J'ai préféré coder moi-même le projet plutôt que d'utiliser des templates
                        et autres librairies, je peux ainsi avoir la main sur l'ensemble du code. Le site est publié via GitHub Pages."
                        logo1={react}
                        alt1="logo react"
                        tech="Réalisé avec: ReactJS"
                        url2="https://github.com/karastras/Portfolio" 
                        hiddenButton
                    />               
                </div>
                <div className="project-card04">
                    <ProjectCard   
                        title="MyFlix"
                        picture={myFlix}
                        alt = "miniature du site myflix représentant la page de la liste des séries"
                        text="Projet développé durant la formation Symfony. Je l'ai repris pour continuer à le développer, en terminant 
                        les différents points de sécurité, en améliorant le front et en y ajoutant d'autres sections qui demandent plus de fonctionnalités 
                        comme forum, un espace de vente,... Le site est publié via AWS"
                        logo1={symfony}
                        alt1="logo symfony"
                        tech="Réalisé avec: Symfony"
                        url1="http://18.217.83.183/"
                        url2="https://github.com/karastras/O-flix-O-faq-full-Symfony" 
                    />               
                </div>                                           
            </div>
        </div>
    )
}

export default Projects
