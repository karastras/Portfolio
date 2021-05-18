import React from 'react'
import { useInView } from '../../Features/UseInView'
import CareerCard from '../../Features/CareerCard'

import run from '../../../assets/images/run.png'
import opquast from '../../../assets/images/opquast.png'
import badge from '../../../assets/images/badge.png'
import oclock from '../../../assets/images/oclock.png'
import plane from '../../../assets/images/plane.png'
import hammer from '../../../assets/images/hammer.jpg'
import afpa from '../../../assets/images/afpa.jpg'
import ikea from '../../../assets/images/ikea.jpg'
import bac from '../../../assets/images/bac.png'
import pcDiploma from '../../../assets/images/pcDiploma.png'
import diplo from '../../../assets/images/diplo.jpg'

import './style.scss'

const Carrer = () => {
    const[ ref, inView ] = useInView({
        triggerOnce: true,
        threshold: 0.1
    }) 
    return (
        <div id="Career" className="career">
            <div className="career-image">
                <img className="career-img" src={run} alt="avatar en train de courir avec un sourire et dispersant derrière lui sa malette et documents de travail"/>
            </div>
            <h1 className="career-title">
                Mon parcours Pro
            </h1>
            <div ref={ref} className={inView ? "career-container anim1" : "hidden"}>
                <div className="career-item">
                    <div className="career-line">
                        <img className="career-imgOpquast" src={opquast} alt="icône opquast"/>
                    </div>                    
                    <div className="career-item-date">
                        12/2020
                    </div>
                    <CareerCard >
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                Opquast
                            </h3>
                            <p className="career-item-description">
                                Maîtrise de la qualité en projet web
                            </p>
                            <p className="career-item-description">
                                Score: 870/1000
                            </p>
                            <div className="career-item-badge">
                                <a target='_blank' rel='noreferrer' href=" https://directory.opquast.com/fr/certificat/Q1OE2V/"><img className="career-badge" src={badge} alt="badge de certification opquast niveau avancé 4 étoiles"/></a>
                            </div>                              
                        </div>
                        <div className="career-item-text">
                        <h3 className="career-item-text-title">
                                Certification:
                            </h3>                            
                            <p>
                            Il s'agit d'une certification indispensable pour quiconque touche de près ou de loin le monde du web.
                            Née d'une réelle demande/besoin, le travail effectué par l'équipe d'Opquast est de nécessité publique !
                            </p>
                            <h3 className="career-item-text-title">
                                Niveau avancé:
                            </h3>                            
                            <p>
                                Excellente connaissance des règles qualité Web et du vocabulaire associé. Compétences réelles et appréciables pour
                                participer à des projets Web.
                            </p>
                            <a className="career-item-link" target='_blank' rel='noreferrer' href=" https://directory.opquast.com/fr/certificat/Q1OE2V/">
                                Consulter le certificat
                            </a>
                        </div>
                    </CareerCard>
                </div>
                <div className="career-item">
                    <div className="career-line">
                        <img className="career-imgOpquast" src={oclock} alt="icône école o'clock"/>
                    </div>                    
                    <div className="career-item-date">
                        05/2020-<br />
                        10/2020
                    </div>
                    <CareerCard >
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                O'clock
                            </h3>
                            <p className="career-item-description">
                                Formation de 5 mois en développeur web et web mobile
                            </p>
                            <p className="career-item-description">
                                La formation s’est déroulée selon le format téléprésentiel, de manière synchrone et avec une obligation de présence<br />
                            </p>   
                            <img className="career-imgPcDiploma" src={pcDiploma} alt="avatar dans un ordinateur portable portant un couvre-chef de remise de diplôme et tenant un diplôme à la main avec un sourire"/>                      
                        </div>
                        <div className="career-item-text">
                            <h3 className="career-item-text-title">
                                Les skills de la formation :
                            </h3>
                            <ul>
                                <li>● Langage HMTL / CSS / PHP / JS</li>
                                <li>● Maquetter une application</li>
                                <li>● Réaliser une interface utilisateur web statique et adaptable</li>
                                <li>● Développer une interface utilisateur web dynamique</li>
                                <li>● Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</li>
                                <li>● Créer une base de données</li>
                                <li>● Développer les composants d'accès aux données</li>
                                <li>● Développer la partie back-end d'une application web ou web mobile</li>
                                <li>● Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce</li>
                                <li>● Spécialisation REACT</li>                                
                            </ul>
                        </div>    
                    </CareerCard >
                </div>
                <div className="career-item">
                    <div className="career-line">
                        <img className="career-imgOpquast" src={plane} alt="icone avion"/>
                    </div>                    
                    <div className="career-item-date">
                        07/2013-<br />
                        11/2020
                    </div>
                    <CareerCard>
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                Aéroport Strasbourg
                            </h3>
                            <p className="career-item-description">
                                Assistant au Personnes à Mobilité Réduite (APMR)
                            </p>                              
                        </div>
                        <div className="career-item-text">
                            <h3 className="career-item-text-title">
                                Fonction:
                            </h3>
                            <p>
                                L’agent APMR accompagne les personnes vivant avec un handicap dans différentes étapes aéroportuaires. 
                                Il l’assiste à l’entrée de l'aéroport, le conduit à l'enregistrement, aux contrôles de sureté, à l’embarquement,
                                au débarquement ainsi qu'à l'espace bagages. La sécurité du client ainsi que celle de ses biens lui incombent.
                            </p>
                            <p>                            
                                Ce travail à l'aéroport de Strasbourg s'est effectué au sein d'une équipe de 6 personnes gérant environ 10000 
                                passagers par an en demande d'assistance.
                            </p>
                        </div>
                    </CareerCard>
                </div>
                <div className="career-item">
                    <div className="career-line">
                        <img className="career-imgOpquast" src={hammer} alt="icône marteau et clef anglaise"/>
                    </div>                    
                    <div className="career-item-date">
                        2008-<br />
                        2014
                    </div>
                    <CareerCard>
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                Auto-entrepreneur
                            </h3>
                            <p className="career-item-description">
                                Pose de menuiserie et d'amménagement d'intérieur
                            </p>                              
                        </div>
                        <div className="career-item-text">
                            <h3 className="career-item-text-title">
                                Services:
                            </h3>
                            <ul>
                                <li>● Démarchage de client</li>
                                <li>● Réalisation des devis et croquis</li>
                                <li>● Achat et livraison de matériel</li>
                                <li>● Montage et pose d'éléments divers</li>
                                <li>● Facturation et comptabilité</li>
                                <li>● SAV</li>                                
                            </ul>
                        </div>
                    </CareerCard>
                </div>
                <div className="career-item">
                    <div className="career-line">
                        <img className="career-imgOpquast" src={afpa} alt="icône centre de formation Afpa"/>
                    </div>                    
                    <div className="career-item-date">
                        2012
                    </div>
                    <CareerCard>
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                AFPA - Strasbourg
                            </h3>
                            <p className="career-item-description">
                                Titre professionnel de niveau 5 (CAP)
                            </p>
                            <p className="career-item-description">  
                                Pose de menuiserie et d'amménagement d'intérieur
                            </p>                              
                        </div>
                        <div className="career-item-text">
                            <h3 className="career-item-text-title">
                                Formation de 9 mois:
                            </h3>
                            <p>
                                Le poseur de menuiseries et d'aménagements intérieurs est un décorateur des cuisines et
                                des salles de bains.
                            </p>
                            <p>
                                Sa mission, équiper cuisines et salles de bains pour les rendre fonctionnelles.
                            </p>
                        </div>
                    </CareerCard>
                </div>
                <div className="career-item">
                    <div className="career-line">
                        <img className="career-imgOpquast" src={ikea} alt="icône magasin ikea"/>
                    </div>                    
                    <div className="career-item-date">
                        2005-<br />
                        2010
                    </div>
                    <CareerCard>
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                IKEA Strasbourg
                            </h3>
                            <p className="career-item-description">
                                CDI employé en libre service
                            </p>                              
                        </div>
                        <div className="career-item-text">
                            <h3 className="career-item-text-title">
                                Fonction:
                            </h3>
                            <ul>
                                <li>● Renseignements et conseils client</li>
                                <li>● Responsable de surface de vente de trois boutiques</li>
                                <li>● Suivi du chiffre dʼaffaire</li>
                                <li>● Implantation des nouveautés</li>
                                <li>● Gestion du stock</li>
                                <li>● Formation des nouvelles recrues</li>
                            </ul>
                        </div>
                    </CareerCard>
                </div>
                <div className="career-item">
                    <div className="career-line">
                        <img className="career-imgOpquast" src={diplo} alt="icône diplômé d'études"/>
                    </div>                    
                    <div className="career-item-date">
                        2001
                    </div>
                    <CareerCard>
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                BAC Economique et social
                            </h3>
                            <p className="career-item-description">
                                Lycée Saint-André Colmar
                            </p>                              
                        </div>
                        <img className="career-imgBac" src={bac} alt="tête de l'avatar dans un certificat d'étude avec le texte j'ai réussi"/>
                    </CareerCard>
                </div>
            </div>
        </div>
    )
}

export default Carrer
