import ProjectCard from '../../Features/ProjectCard/ProjectCard'
import project from '../../assets/images/project.png'

import styles from './projects.module.scss'

import { ProjectData } from './projectData.ts';

const Projects = () => {
    return (
        <div id="Projects" className={styles.project}>
            <div className={styles.image}>
                <img className={styles.img} src={project} alt="avatar avec un sourire tenant une boite qui présente son projet, une réprésentation du système solaire fabriquée à la main" />
            </div>
            <h2 className={styles.title}>Mes projets</h2>
            <div className={styles.card}>
                {
                    ProjectData.map(data =>
                        <ProjectCard
                            title={data.title}
                            videoUrl={data.videoUrl}
                            picture={data.picture}
                            alt={data.alt}
                            text={data.text}
                            logo1={data.logo1}
                            alt1={data.alt1}
                            logo2={data.logo2}
                            alt2={data.alt2}
                            logo3={data.logo3}
                            alt3={data.alt3}
                            tech={data.tech}
                            url1={data.url1}
                            url2={data.url2}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Projects