import prana from '../../assets/images/prana.jpg'
import react from '../../assets/images/react.svg'

export interface CarrerDataProps {
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

export const CarrerData: CarrerDataProps[] = [
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
    
]