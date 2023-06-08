import './index.css'
import { projects } from '../../constants'
import ProjectCard from './project-card'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className='projects-container'>
        <div className='projects-title-wrap'>
          <h2 className="title-large project">02. Projects</h2>
        </div>
        <div className='project-scroll-wrap'>
          {projects.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section >
  )
}

export default Projects