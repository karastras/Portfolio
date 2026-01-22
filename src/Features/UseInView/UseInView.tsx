import { useEffect, useState} from 'react'

interface Options {
  threshold: number
  triggerOnce: boolean
}

export function useInView(options: Options) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [inView, setInView] = useState<boolean>(false)

  useEffect(() => {
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

//------------------------------------------
// import { useInView } from './UseInView'  |
//                                          |
// const[ ref, inView ] = useInView({       |
//   triggerOnce: true,                     |
//   threshold: 0.3                         |
// })                                       |
//-------------------------------------------