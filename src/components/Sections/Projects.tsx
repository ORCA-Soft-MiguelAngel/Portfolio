import React, { useContext } from 'react'
import SectionsContext from '../../contexts/SectionsContext'
import { projects } from '../../helpers/dummyData'
import ProjectCard from '../Projects/ProjectCard'

const Projects: React.FC = () => {
  const context = useContext(SectionsContext)
  return (
    <section className="projects" ref={context?.projectsRef} style={{ minHeight: '100vh' }}>
      <h2 className="title">My projects</h2>{' '}
      <div className="project-container">
        {projects.map(({ content, img, techStack, title, url }, i) => (
          <ProjectCard
            key={`project-${i}`}
            title={title}
            content={content}
            img={img}
            techStack={techStack}
            url={url}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
