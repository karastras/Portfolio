import prana from '../../assets/images/prana.jpg'
import portfolio from '../../assets/images/portfolio.jpg'
import myFlix from '../../assets/images/myflix.png'
import react from '../../assets/images/react.svg'
import symfony from '../../assets/images/symfony.svg'
import redux from '../../assets/images/redux.svg'

export interface ProjectDataProps {
    title?: string
    picture?: string
    videoUrl?: string
    text: string
    tech: string
    logo1: string
    alt1: string
    logo2?: string
    alt2?: string
    logo3?: string
    alt3?: string
    url1?: string
    url2?: string
    alt?: string
}

export const ProjectData: ProjectDataProps[] = [
    {
        title: "Prana -site vitrine-",
        picture: `${prana}`,
        alt: "miniature du site vitrine prana représentant la page d'acceuil",
        text: "Site vitrine pour un institut de soin biologique. Le délai accordé pour monter le projet était de 4 semaines. Le graphisme, les polices de caractères et les différentes informations comme les tarifs étaient à reprendre de l'ancienne version du site. Le site est publié. L'historique du site est dans ses mentions légales. Le site est publié via Netlify.",
        logo1: `${react}`,
        alt1: "logo react",
        tech: "Réalisé avec: REACT",
        url1: "https://example-prana.netlify.app/",
        url2: "https://github.com/karastras/Prana",
    },
    {
        title: "My Travel Road",
        videoUrl: "https://www.youtube.com/embed/H0ChNO5qkMM",
        text: "Site créé en fin de formation O'clock dans les conditions réelles d'entreprise dans une équipe de 5 personnes. Méthode Agile-Scrum, Rôle: Product Owner. Site en cours de développement. Vous pouvez consulter la présentation de fin de formation.",
        logo1: `${symfony}`,
        alt1: "logo symfony",
        logo2: `${react}`,
        alt2: "logo react",
        logo3: `${redux}`,
        alt3: "logo redux",
        tech: "Back: SYMFONY <-> Front: REACT/REDDUX",
        url1: "https://www.youtube.com/watch?v=H0ChNO5qkMM&t=3s",
        url2: "https://github.com/karastras/MyTravelRoad"
    },
    {
        title: "Portfolio",
        picture: `${portfolio}`,
        alt: "miniature du site portfolio représentant la page d'acceuil",
        text: "Dossier personnel dans lequel les acquis de formation et les acquis d'expérience sont définis et démontrés en vue d'une reconnaissance par un établissement d'enseignement ou un employeur. J'ai préféré coder moi-même le projet plutôt que d'utiliser des templates et autres librairies, je peux ainsi avoir la main sur l'ensemble du code. Le site est publié via GitHub Pages.",
        logo1: `${react}`,
        alt1: "logo react",
        tech: "Réalisé avec: ReactJS",
        url2: "https://github.com/karastras/Portfolio"
    },
    {
        title: "MyFlix",
        picture: `${myFlix}`,
        alt: "miniature du site myflix représentant la page de la liste des séries",
        text: "Projet développé durant la formation Symfony. Je l'ai repris pour continuer à le développer, en terminant les différents points de sécurité, en améliorant le front et en y ajoutant d'autres sections qui demandent plus de fonctionnalités comme forum, un espace de vente,...",
        logo1: `${symfony}`,
        alt1: "logo symfony",
        tech: "Réalisé avec: Symfony",
        url2: "https://github.com/karastras/MyFlix-O-faq-full-Symfony"
    }

]