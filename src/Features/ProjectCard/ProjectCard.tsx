import { useInView } from '../UseInView/UseInView'

import './projectCard.scss'

export interface ProjectCardProps {
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

const ProjectCard = ({
    title,
    picture,
    videoUrl,
    text,
    tech,
    logo1,
    alt1,
    logo2,
    alt2,
    logo3,
    alt3,
    url1,
    url2,
    alt,
}: ProjectCardProps) => {
    const[ ref , inView ] = useInView({
        triggerOnce : true,
        threshold: 0.5
    })
    return (
        <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className={inView ? "card anim3" : "hidden"} >
            <div className="card-left">
                <h2 className="card-title">
                    {title}
                </h2>
                { videoUrl && (       
                    <div className="card-iframe">           
                    <iframe height= "100%"
                            width ="100%"
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen src={videoUrl}>
                    </iframe>
                    </div> 
                    )
                }
                { picture && (                    
                    <div className="card-image">
                        <img className="card-img" src={picture} alt={alt}/>
                    </div>
                    )
                }                
            </div>            
            <div className="card-right">
                <p className="card-text">
                    {text}
                </p>
                {(logo1 || logo2 || logo3) &&
                    <div className='card-logos'>
                        { logo1 && <img className='card-logo'src={logo1} alt={alt1}/> }
                        { logo2 && <img className='card-logo'src={logo2} alt={alt2}/> }
                        { logo3 && <img className='card-logo'src={logo3} alt={alt3}/> }
                    </div>
                }
                <p className="card-tech">
                    {tech}
                </p>
                <div className="card-buttons">
                    {url1 && 
                    <button className="card-button">
                        <a className="card-button-link" target='_blank' rel='noreferrer' href={url1}>
                            Visiter
                        </a>
                    </button>
                    }
                    {url2 && 
                    <button className="card-button">
                        <a className="card-button-link" target='_blank' rel='noreferrer' href={url2}>
                            Code source
                        </a>
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
