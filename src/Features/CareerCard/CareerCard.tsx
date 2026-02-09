import { useInView } from '../UseInView/UseInView'

import styles from './careerCard.module.scss'

const CareerCard = ({children}: React.PropsWithChildren) => {
    const[ ref, inView ] = useInView({
        triggerOnce: true,
        threshold: 0.5
    }) 
    return (
        <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className={inView ? `${styles.careerCard} ${styles.anim2}` : styles.hidden} >
            {children}
        </div>
    )
}

export default CareerCard
