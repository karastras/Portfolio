import React from 'react'

import ProjectCard from '../../Features/ProjectCard'

import prana from '../../../assets/images/prana.jpg'
import travel from '../../../assets/images/travel.png'
import project from '../../../assets/images/project.png'
import portfolio from '../../../assets/images/portfolio.jpg'


import './style.scss'

const Projects = () => { 

    return (
        <div id="Projects" className="project">
            <div className="project-image">
                    <img className="project-img" src={project} alt=""/>
                </div>
            <h2 className="project-title">
                Mes projets
            </h2>
            <div className="project-cards">
                <div className="project-card01">
                    <ProjectCard  
                            title="Prana -site vitrine-"
                            picture={prana}
                            text="Site vitrine pour un institut de soin biologique. Le site est publié. L'historique du site est dans ses mentions légales."
                            tech="Réalisé avec: REACT"
                            url1="https://example-prana.netlify.app/" 
                            url2="https://github.com/karastras/Prana"
                            />
                </div>
                <div className="project-card02">
                    <ProjectCard   title="My Travel Road"
                            picture={travel}
                            text="Site créé en fin de formation O'clock dans les conditions réelles
                            d'entreprise dans une équipe de 5 personnes. Méthode Agile, Rôle: Product Owner. Site en
                            cours de publication. Vous pouvez consulter la présentation de fin de formation."                        
                            tech="Front: REACT/REDDUX <-> Back: SYMFONY"
                            url1="https://www.youtube.com/watch?v=H0ChNO5qkMM&t=3s" 
                            url2="https://github.com/karastras/MyTravelRoad"
                            />
                </div>
                <div className="project-card03">
                    <ProjectCard   title="Portfolio"
                            picture={portfolio}
                            text="Dossier personnel dans lequel les acquis de formation et les acquis d'expérience
                            sont définis et démontrés en vue d'une reconnaissance par un établissement d'enseignement
                            ou un employeur. J'ai préféré coder moi-même le projet plutôt que d'utiliser des templates
                            et autres librairies, je peux ainsi avoir la main sur l'ensemble du code."
                            tech="Réalisé avec: REACT"
                            url2="https://github.com/karastras/Portfolio" 
                            hiddenButton
                            />               
                </div>                                      
            </div>
        </div>
    )
}

export default Projects
