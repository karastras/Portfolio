import { useEffect, useState} from 'react'

export function useInView(options) {
  const [ref, setRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(
    () => {
        if (!ref) return
        
        const intersectionOptions = {
            threshold: options.threshold || 0,
        }
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                setInView(entry.isIntersecting)
                if (options.triggerOnce && entry.isIntersecting) {
                    obs.unobserve(ref)
                }
            });
        }, intersectionOptions);
        observer.observe(ref)
        return () => {
          observer.unobserve(ref)
          
        }
    },
    [ref, options.threshold, options.triggerOnce],
  )

  return [setRef, inView]
}
// use this code in target component and add ref={ref} + | inView-state to change css 
//                                                       | className={inView ? "animX" : "hidden"}

// import { useInView } from './UseInView'

// const[ ref, inView ] = useInView({
//   triggerOnce: true,
//   threshold: 0.3
// }) 
