import pcDiploma from '../../assets/images/pcDiploma.png'
import badge from '../../assets/images/badge.png'


export interface CarrerDataProps {
    title?: string
    description?: string
    supDescription?: string
    link?: string
    linkText?: string
    badge?: string
    logo1: string
    altLogo1: string
    itemTextTitle?: string
    list1?: string[]
    itemTextTitle2?: string
    list2?: string[],
    link2?: string
    linkText2?: string
}

export const CarrerData: CarrerDataProps[] = [
    {
        title: "Titre Professionnel Niveau V (Bac+2)",
        description: "Développeur Web et Web mobile",
        supDescription: "Délivré par",
        link: "https://www.francecompetences.fr/recherche/rncp/31114/",
        linkText: "le Ministère du Travail, de l'emploi et de L'insertion",
        logo1: `${pcDiploma}`,
        altLogo1: "avatar dans un ordinateur portable portant un couvre-chef de remise de diplôme et tenant un diplôme à la main avec un sourire",
        itemTextTitle: "Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
        list1: [
            "Réaliser un cahier des charges / Maquetter une application",
            "Réaliser une interface utilisateur web statique et adaptable",
            "Développer une interface utilisateur web dynamique"
        ],
        itemTextTitle2: "Développer la partie back-end d'une application web ou web mobile",
        list2: [
            "Créer une base de données",
            "Développer les composants d'accès aux données",
            "Développer la partie back-end d'une application web ou web mobile"
        ]
    },
    {
        title: "Opquast",
        description: "Maîtrise de la qualité en projet web",
        supDescription: "Score: 870/1000",
        link: "https://directory.opquast.com/fr/certificat/Q1OE2V/",
        logo1: `${badge}`,
        altLogo1: "élément cliquable renvoyant au site d'opquast représentant un badge de certification opquast niveau avancé 4 étoiles",
        itemTextTitle: "Certification:",
        list1: [
            "Il s'agit d'une certification indispensable pour quiconque touche de près ou de loin le monde du web.Née d'une réelle demande/besoin, le travail effectué par l'équipe d'Opquast est de nécessité publique !"
        ],
        itemTextTitle2: "Niveau avancé:",
        list2: [
            "Excellente connaissance des règles qualité Web et du vocabulaire associé.",
            "Compétences réelles et appréciables pour participer à des projets Web."
        ],
        link2: "https://directory.opquast.com/fr/certificat/Q1OE2V/",
        linkText2:"Consulter le certificat",
    }

]