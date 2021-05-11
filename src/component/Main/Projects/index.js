import React from 'react'

import Card from '../../Features/Card'

import './style.scss'



const Projects = () => {
    return (
        <div id="Projects" className="project">
            <h2 className="project-title">
                Mes projets
            </h2>
            <div className="project-cards"> 
                <div className="project-card01">
                    <Card  
                            title="Prana -site vitrine-"
                            text="Site vitrine pour un institut de soin biologique. Le site est publié"
                            tech="React"
                            url1="https://example-prana.netlify.app/" 
                            url2="https://github.com/karastras/Prana"
                            />
                </div>
                <div className="project-card02">
                    <Card   title="My Travel Road"
                            text="Site créé en fin de formation O'clock dans les conditions réelles
                            d'entreprise dans une équipe de 5 personnes. Site en cours de publication.
                            Vous pouvez consulter la présentation de fin de formation."
                            tech="Front: REACT/REDDUX <-> Back: SYMFONY"
                            url1="https://www.youtube.com/watch?v=H0ChNO5qkMM&t=3s" 
                            url2="https://github.com/karastras/MyTravelRoad"
                            />
                </div>
                <div className="project-card03">
                    <Card   title="Portfolio"
                            text="Dossier personnel dans lequel les acquis de formation et les acquis d'expérience
                            sont définis et démontrés en vue d'une reconnaissance par un établissement d'enseignement
                            ou un employeur. J'ai préférer coder moi-même le projet plutôt que d'utiliser des templates
                            et autres librairies, je peux ainsi avoir la main sur l'ensemble du code."
                            tech="React"
                            url2="https://github.com/karastras/Portfolio" 
                            hiddenButton
                            />               
                </div>                                      
            </div>
        </div>
    )
}

export default Projects
