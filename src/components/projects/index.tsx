import './index.css'
import { webContent } from '../../constants'
import ProjectCard from './project-card'

function Projects() {
  const { title, details: projects } = webContent.projects

  return (
    <section id="projects" className="projects">
      <div className='projects-container'>
        <div className='projects-title-wrap'>
          <h2 className="title-large project">{title}</h2>
        </div>
        <div className='project-scroll-wrap'>
          {projects.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section >
  )
}

export default Projects