import React from 'react'

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
    return (
        <div id="Career" className="career">
            <div className="career-image">
                <img className="career-img" src={run} alt=""/>
            </div>
            <h1 className="career-title">
                Mon parcours Pro
            </h1>
            <div className="career-container">
                <div className="career-item">
                    <div className="career-line"><img className="career-imgOpquast" src={opquast} alt=""/></div>                    
                    <date className="career-item-date">
                        12/2020
                    </date>
                    <div className="career-item-container">
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                Opquast
                            </h3>
                            <p className="career-item-description">
                                Maîtrise de la qualité en projet web<br />
                                <br />
                                Score: 870/1000
                            </p>
                            <div className="career-item-badge">
                                <a target='_blank' rel='noreferrer' href=" https://directory.opquast.com/fr/certificat/Q1OE2V/"><img className="career-badge" src={badge} alt=""/></a>
                            </div>                              
                        </div>
                        <p className="career-item-text">
                            Niveau avancé:<br/>
                            <br />
                            Excellente connaissance des règles qualité Web et du vocabulaire associé. Compétences réelles et appréciables pour
                            participer à des projets Web.<br />
                            <br />
                            Métiers : <br />
                            <br />
                            Formateur ou référent qualité Web, développeur Web, intégrateur, chef de projet senior, UX senior, 
                            consultant SEO, expert accessibilité. <br/>
                            <br />
                            <a target='_blank' rel='noreferrer' href=" https://directory.opquast.com/fr/certificat/Q1OE2V/">Consulter le certificat</a>
                        </p>
                    </div>
                </div>
                <div className="career-item">
                    <div className="career-line"><img className="career-imgOpquast" src={oclock} alt=""/></div>                    
                    <date className="career-item-date">
                        05/2020<br />
                        10/2020
                    </date>
                    <div className="career-item-container">
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                O'clock
                            </h3>
                            <p className="career-item-description">
                                Formation de 5 mois en développeur web et web mobile<br />
                                <br/>
                                La formation s’est déroulée selon le format téléprésentiel, de manière synchrone et avec une obligation de présence<br />
                            </p>
                            <img className="career-imgPcDiploma" src={pcDiploma} alt=""/>                      
                        </div>
                        <p className="career-item-text">
                        Les skills de la formation :<br />
                        <br />
                        ● Langage HMTL / CSS / PHP / JS<br />   
                        ● Maquetter une application<br />
                        ● Réaliser une interface utilisateur web statique et adaptable<br />
                        ● Développer une interface utilisateur web dynamique<br />
                        ● Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce<br />
                        ● Créer une base de données<br />
                        ● Développer les composants d'accès aux données<br />
                        ● Développer la partie back-end d'une application web ou web mobile<br />
                        ● Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce<br />
                        ● Spécialisation REACT
                        </p>
                    </div>
                </div>
                <div className="career-item">
                    <div className="career-line"><img className="career-imgOpquast" src={plane} alt=""/></div>                    
                    <date className="career-item-date">
                        07/2013-<br />
                        11/2020
                    </date>
                    <div className="career-item-container">
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                Aéroport Strasbourg
                            </h3>
                            <p className="career-item-description">
                                Assistant au Personnes à Mobilité Réduite (APMR)
                            </p>                              
                        </div>
                        <p className="career-item-text">
                        Fonction:<br />
                        <br />
                        L’agent APMR accompagne les personnes vivant avec un handicap dans les transports en commun ou dans une 
                        voiture particulière. Il l’assiste à l’entrée et à la sortie des véhicules. Il conduit le client et l’assiste 
                        pour les besoins de l'enregistrement, l’embarquement et du débarquement. La sécurité du client ainsi que celle de ses biens lui incombent.<br />
                        <br />
                        Ce travail à l'aéroport de Strasbourg s'est effectué au sein d'une equipe de 6 personnes gérant environ 10 000 passagers par an en demande 
                        d'assistance.
                        </p>
                    </div>
                </div>
                <div className="career-item">
                    <div className="career-line"><img className="career-imgOpquast" src={hammer} alt=""/></div>                    
                    <date className="career-item-date">
                        2008-<br />
                        2014
                    </date>
                    <div className="career-item-container">
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                Auto-entrepreneur
                            </h3>
                            <p className="career-item-description">
                                Pose de menuiserie et d'amménagement d'intérieur
                            </p>                              
                        </div>
                        <p className="career-item-text">
                            Services:<br />
                            <br />
                            ● Démarchage de client<br />
                            ● Réalisation des devis et croquis<br />
                            ● Achat et livraison de matériel<br />
                            ● Montage et pose d'éléments divers<br />
                            ● Facturation et comptabilité<br />
                            ● SAV
                        </p>
                    </div>
                </div>
                <div className="career-item">
                    <div className="career-line"><img className="career-imgOpquast" src={afpa} alt=""/></div>                    
                    <date className="career-item-date">
                        2012
                    </date>
                    <div className="career-item-container">
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                AFPA - Strasbourg
                            </h3>
                            <p className="career-item-description">
                                Titre professionnel de niveau 5 (CAP)<br/>
                                <br />
                                Pose de menuiserie et d'amménagement dintérieur
                            </p>                              
                        </div>
                        <p className="career-item-text">
                            Formation de 9 mois:<br/>
                            <br/>
                            Le poseur de menuiseries et d'aménagements intérieurs est un décorateur des cuisines et
                            des salles de bains.<br />
                            <br />
                            Sa mission, équiper cuisines et salles de bains pour les rendre fonctionnelles.
                        </p>
                    </div>
                </div>
                <div className="career-item">
                    <div className="career-line"><img className="career-imgOpquast" src={ikea} alt=""/></div>                    
                    <date className="career-item-date">
                        2005-<br />
                        2010
                    </date>
                    <div className="career-item-container">
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                IKEA Strasbourg
                            </h3>
                            <p className="career-item-description">
                                CDI employé en libre service
                            </p>                              
                        </div>
                        <p className="career-item-text">
                            Employé au rayon textile puis responsable de surface de vente de trois boutiques, suivi du
                            chiffre dʼaffaire, implantation des nouveautés, gestion du stock, formation des nouvelles recrues
                        </p>
                    </div>
                </div>
                <div className="career-item">
                    <div className="career-line"><img className="career-imgOpquast" src={diplo} alt=""/></div>                    
                    <date className="career-item-date">
                        2001
                    </date>
                    <div className="career-item-container">
                        <div className="career-item-content">
                            <h3 className="career-item-title">
                                BAC Economique et social
                            </h3>
                            <p className="career-item-description">
                                Lycée Saint-André Colmar
                            </p>                              
                        </div>
                        <img className="career-imgBac" src={bac} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrer
