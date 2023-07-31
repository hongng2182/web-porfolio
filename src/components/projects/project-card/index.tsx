/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Project } from "../../../types"
import { GithubIcon, LinkIcon } from '../../svg'
import './index.css'

function ProjectCard({ project }: { project: Project }) {
    const { title, alt, projectImg, description, techStack, githubLink, demoLink } = project

    return <div key={title} className='project-card'>
        <div className='card-wrap'>
            <img style={{ height: project.media?.height ? project.media.height : 'auto'}} alt={alt} src={projectImg} />
            <div className='card-info'>
                <h3 className="subtitle-large">{title}</h3>
                <div className="project-description body-medium">
                    <p>{description}</p>
                </div>
                <div className="project-tech">
                    {techStack.map((tech, index) => <p className='label-large' key={index}>{tech}</p>)}
                </div>
                <div className="project-links">
                    {githubLink && <a href={githubLink} target='__blank'><GithubIcon /></a>}
                    <a href={demoLink} target='__blank'><LinkIcon /></a>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectCard
