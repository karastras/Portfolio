import { useInView } from '../../Features/UseInView/UseInView'
import CareerCard from '../../Features/CareerCard/CareerCard'

import run from '../../assets/images/run.png'
import opquast from '../../assets/images/opquast.png'
import badge from '../../assets/images/badge.png'
import oclock from '../../assets/images/oclock.png'
import plane from '../../assets/images/plane.png'
import hammer from '../../assets/images/hammer.jpg'
import afpa from '../../assets/images/afpa.jpg'
import ikea from '../../assets/images/ikea.jpg'
import bac from '../../assets/images/bac.png'
import pcDiploma from '../../assets/images/pcDiploma.png'
import pcStudent from '../../assets/images/pcStudent.png'
import diplo from '../../assets/images/diplo.jpg'

import { CarrerData } from './carrerData.ts';


import styles from './carrer.module.scss'

const Carrer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })
    return (
        <div id="Career" className={styles.container}>
            <div className={styles.image}>
                <img className={styles.img} src={run} alt="avatar en train de courir avec un sourire et dispersant derrière lui sa malette et documents de travail" />
            </div>
            <h2 className={styles.title}>
                Mon parcours Pro
            </h2>
            <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className={inView ? `${styles.anim1} ${styles.container} ${styles.content}` : `${styles.hidden}`}>
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={diplo} alt="icône diplômé d'études" />
                    </div>
                    <div className={styles.itemDate}>
                        07/2021
                    </div>
                    <CareerCard >
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                Titre Professionnel Niveau V (Bac+2)
                            </h3>
                            <p className={styles.itemDescription}>
                                Développeur Web et Web mobile
                            </p>
                            <p className={styles.itemDescription}>
                                Délivré par <a target='_blank' rel='noreferrer' href="https://www.francecompetences.fr/recherche/rncp/31114/">le Ministère du Travail, de l'emploi et de L'insertion</a>
                            </p>
                            <img className={styles.imgPcDiploma} src={pcDiploma} alt="avatar dans un ordinateur portable portant un couvre-chef de remise de diplôme et tenant un diplôme à la main avec un sourire" />
                        </div>
                        <div className={styles.itemText}>
                            <h4 className={styles.itemTextTitle}>
                                Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité
                            </h4>
                            <ul>
                                <li>- Réaliser un cahier des charges / Maquetter une application</li>
                                <li>- Réaliser une interface utilisateur web statique et adaptable</li>
                                <li>- Développer une interface utilisateur web dynamique</li>
                            </ul>
                            <h4 className={styles.itemTextTitle}>
                                Développer la partie back-end d'une application web ou web mobile
                            </h4>
                            <ul>
                                <li>- Créer une base de données</li>
                                <li>- Développer les composants d'accès aux données</li>
                                <li>- Développer la partie back-end d'une application web ou web mobile</li>
                            </ul>
                        </div>
                    </CareerCard>
                </div>
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={opquast} alt="icône opquast" />
                    </div>
                    <div className={styles.itemDate}>
                        12/2020
                    </div>
                    <CareerCard >
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                Opquast
                            </h3>
                            <p className={styles.itemDescription}>
                                Maîtrise de la qualité en projet web
                            </p>
                            <p className={styles.itemDescription}>
                                Score: 870/1000
                            </p>
                            <div className={styles.itemBadge}>
                                <a target='_blank' rel='noreferrer' href=" https://directory.opquast.com/fr/certificat/Q1OE2V/"><img className="career-badge" src={badge} alt="élément cliquable renvoyant au site d'opquast représentant un badge de certification opquast niveau avancé 4 étoiles" /></a>
                            </div>
                        </div>
                        <div className={styles.itemText}>
                            <h4 className={styles.itemTextTitle}>
                                Certification:
                            </h4>
                            <p>
                                Il s'agit d'une certification indispensable pour quiconque touche de près ou de loin le monde du web.
                                Née d'une réelle demande/besoin, le travail effectué par l'équipe d'Opquast est de nécessité publique !
                            </p>
                            <h4 className={styles.itemTextTitle}>
                                Niveau avancé:
                            </h4>
                            <p>
                                Excellente connaissance des règles qualité Web et du vocabulaire associé. Compétences réelles et appréciables pour
                                participer à des projets Web.
                            </p>
                            <a className={styles.itemLink} target='_blank' rel='noreferrer' href=" https://directory.opquast.com/fr/certificat/Q1OE2V/">
                                Consulter le certificat
                            </a>
                        </div>
                    </CareerCard>
                </div>
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={oclock} alt="icône école o'clock" />
                    </div>
                    <div className={styles.itemDate}>
                        05/2020-<br />
                        10/2020
                    </div>
                    <CareerCard >
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                O'clock
                            </h3>
                            <p className={styles.itemDescription}>
                                Formation de 5 mois en développeur web et web mobile
                            </p>
                            <p className={styles.itemDescription}>
                                La formation s’est déroulée selon le format téléprésentiel, de manière synchrone et avec une obligation de présence<br />
                            </p>
                            <img className={styles.imgPcDiploma} src={pcStudent} alt="avatar dans un ordinateur portable portant un couvre-chef de remise de diplôme et tenant un diplôme à la main avec un sourire" />
                        </div>
                        <div className={styles.itemText}>
                            <h4 className={styles.itemTextTitle}>
                                Les skills de la formation :
                            </h4>
                            <ul>
                                <li>- Langage HMTL / CSS / PHP / JS</li>
                                <li>- Maquetter une application</li>
                                <li>- Réaliser une interface utilisateur web statique et adaptable</li>
                                <li>- Développer une interface utilisateur web dynamique</li>
                                <li>- Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</li>
                                <li>- Créer une base de données</li>
                                <li>- Développer les composants d'accès aux données</li>
                                <li>- Développer la partie back-end d'une application web ou web mobile</li>
                                <li>- Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce</li>
                                <li>- Spécialisation REACT</li>
                            </ul>
                        </div>
                    </CareerCard >
                </div>
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={plane} alt="icone avion" />
                    </div>
                    <div className={styles.itemDate}>
                        07/2013-<br />
                        11/2020
                    </div>
                    <CareerCard>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                Aéroport Strasbourg
                            </h3>
                            <p className={styles.itemDescription}>
                                Assistant au Personnes à Mobilité Réduite (APMR)
                            </p>
                        </div>
                        <div className={styles.itemText}>
                            <h4 className={styles.itemTextTitle}>
                                Fonction:
                            </h4>
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
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={hammer} alt="icône marteau et clef anglaise" />
                    </div>
                    <div className={styles.itemDate}>
                        2008-<br />
                        2014
                    </div>
                    <CareerCard>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                Auto-entrepreneur
                            </h3>
                            <p className={styles.itemDescription}>
                                Pose de menuiserie et d'amménagement d'intérieur
                            </p>
                        </div>
                        <div className={styles.itemText}>
                            <h4 className={styles.itemTextTitle}>
                                Services:
                            </h4>
                            <ul>
                                <li>- Démarchage de client</li>
                                <li>- Réalisation des devis et croquis</li>
                                <li>- Achat et livraison de matériel</li>
                                <li>- Montage et pose d'éléments divers</li>
                                <li>- Facturation et comptabilité</li>
                                <li>- SAV</li>
                            </ul>
                        </div>
                    </CareerCard>
                </div>
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={afpa} alt="icône centre de formation Afpa" />
                    </div>
                    <div className={styles.itemDate}>
                        2012
                    </div>
                    <CareerCard>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                AFPA - Strasbourg
                            </h3>
                            <p className={styles.itemDescription}>
                                Titre professionnel de niveau 5 (CAP)
                            </p>
                            <p className={styles.itemDescription}>
                                Pose de menuiserie et d'amménagement d'intérieur
                            </p>
                        </div>
                        <div className={styles.itemText}>
                            <h4 className={styles.itemTextTitle}>
                                Formation de 9 mois:
                            </h4>
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
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={ikea} alt="icône magasin ikea" />
                    </div>
                    <div className={styles.itemDate}>2005 - 2010</div>
                    <CareerCard>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                IKEA Strasbourg
                            </h3>
                            <p className={styles.itemDescription}>
                                CDI employé en libre service
                            </p>
                        </div>
                        <div className={styles.itemText}>
                            <h4 className={styles.itemTextTitle}>
                                Fonction:
                            </h4>
                            <ul>
                                <li>- Renseignements et conseils client</li>
                                <li>- Responsable de surface de vente de trois boutiques</li>
                                <li>- Suivi du chiffre dʼaffaire</li>
                                <li>- Implantation des nouveautés</li>
                                <li>- Gestion du stock</li>
                                <li>- Formation des nouveaux collaborateurs</li>
                            </ul>
                        </div>
                    </CareerCard>
                </div>
                <div className={styles.item}>
                    <div className={styles.line}>
                        <img className={styles.imgOpquast} src={diplo} alt="icône diplômé d'études" />
                    </div>
                    <div className={styles.itemDate}>
                        2001
                    </div>
                    <CareerCard>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>
                                BAC Economique et social
                            </h3>
                            <p className={styles.itemDescription}>
                                Lycée Saint-André Colmar
                            </p>
                        </div>
                        <img className={styles.imgBac} src={bac} alt="tête de l'avatar dans un certificat d'étude avec le texte j'ai réussi" />
                    </CareerCard>
                </div>
            </div>
        </div>
    )
}

export default Carrer
