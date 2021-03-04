import React, { useState } from 'react'
import { projectProps, projects } from '../../helpers/dummyData'

const Projects: React.FC = () => {
  //STATE
  const [state, setState] = useState<projectProps[]>(projects)

  //HANDLERS
  const handleClickCard = (e: React.MouseEvent) => {
    setState(
      projects.map((project) => {
        if (e.currentTarget.id === project.title) {
          project.selected = !project.selected
          return project
        } else {
          return project
        }
      })
    )
  }

  const handleGoToWebsite = (e: React.MouseEvent) => {
    if (window) {
      window.open(projects.filter(({ title }) => title === e.currentTarget.id)[0].url)
    }
  }

  return (
    <section className="projects" id="projects" style={{ minHeight: '100vh' }}>
      <h2 className="title">My projects</h2>{' '}
      <div className="project-container">
        {state.map(({ content, img, selected, techStack, title }, i) => (
          <div
            key={`${title}-${i + 1}`}
            id={title}
            className={`project-card${selected ? ' clicked' : ''}`}
            onClick={handleClickCard}
          >
            <div className="imgBx">
              <img src={img} alt="" />
            </div>
            <div className="project-content">
              <h2>{title}</h2>
              <p>{content}</p>
              <div className="tech-stack">
                {techStack.map(({ icon, tooltip }, i) => (
                  <div key={`${title}-${tooltip}-${i + 1}`} className="stack">
                    <img src={icon} alt="" />
                    <span className="tooltip">{tooltip}</span>
                  </div>
                ))}
              </div>
              <span className="project-button" onClick={handleGoToWebsite}>
                Website
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
