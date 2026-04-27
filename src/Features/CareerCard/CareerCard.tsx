import type { CarrerDataProps } from '../../Main/Career/careerData'
import { useInView } from '../UseInView/UseInView'

import styles from './careerCard.module.scss'

export interface CareerCardProps {
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
    list2?: string[]
    logo3?: string
    alt3?: string
    url1?: string
    url2?: string
    alt?: string
}

const CareerCard = ({
    title,
    description,
    supDescription,
    link,
    linkText,
    badge,
    logo1,
    altLogo1,
    itemTextTitle,
    list1,
    itemTextTitle2,
    list2,
    link2,
    linkText2
}: CarrerDataProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    return (
        <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className={inView ? `${styles.careerCard} ${styles.anim2}` : styles.hidden} >
            <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>
                    {title}
                </h3>
                <p className={styles.itemDescription}>
                    {description}
                </p>
                <p className={styles.itemDescription}>
                    {supDescription} {link && <a target='_blank' rel='noreferrer' href={link}>{linkText}</a>}
                </p>
                <img className={styles.imgPcDiploma} src={logo1} alt={altLogo1} />
                {badge && <div className={styles.itemBadge}>
                    <a target='_blank' rel='noreferrer' href={link}><img className={styles.itemBadge} src={badge} alt={altLogo1} /></a>
                </div>}
            </div>
            <div className={styles.itemText}>
                <h4 className={styles.itemTextTitle}>
                    {itemTextTitle}
                </h4>
                {list1 &&
                    <ul>
                        {list1.map(data =>
                            <li>- {data}</li>
                        )}
                    </ul>
                }
                <h4 className={styles.itemTextTitle}>
                    {itemTextTitle2}
                </h4>
                {list2 &&
                    <ul>
                        {list2.map(data =>
                            <li>- {data}</li>
                        )}
                    </ul>
                }
                {link2 &&
                    <a className={styles.itemLink} target='_blank' rel='noreferrer' href={link2}>
                        {linkText2}
                    </a>}
            </div>
        </div>
    )
}

export default CareerCard
