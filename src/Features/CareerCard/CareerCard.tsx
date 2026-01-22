import { useInView } from '../UseInView/UseInView'

import './careerCard.scss'

const CareerCard = ({children}: React.PropsWithChildren) => {
    const[ ref, inView ] = useInView({
        triggerOnce: true,
        threshold: 0.5
    }) 
    return (
        <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className={inView ? 'careerCard anim2': 'hidden'} >
            {children}
        </div>
    )
}

export default CareerCard
