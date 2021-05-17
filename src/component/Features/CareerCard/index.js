import React from 'react'
import { useInView } from '../UseInView'

import './style.scss'

const CareerCard = ({children}) => {
    const[ ref, inView ] = useInView({
        triggerOnce: true,
        threshold: 0.5
    }) 
    return (
        <div ref={ref} className={inView ? 'careerCard anim2': 'hidden'} >
            {children}
        </div>
    )
}

export default CareerCard
