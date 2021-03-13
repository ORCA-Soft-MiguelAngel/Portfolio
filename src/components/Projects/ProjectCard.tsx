import React, { useState } from 'react'
import { projectProps } from '../../helpers/dummyData'
import ReactGa from 'react-ga'

type props = projectProps

const ProjectCard: React.FC<props> = ({ content, img, techStack, title, url }) => {
  //STATES
  //selected state
  const [selected, setSelected] = useState<boolean>(false)

  //HANDLERS
  const handleGoToWebsite = () => {
    //Analytic
    ReactGa.event({
      category: 'Button',
      action: `Click on website - ${title}`,
    })
    window && window.open(url)
  }

  return (
    <div
      id={title}
      className={`project-card${selected ? ' clicked' : ''}`}
      onClick={() => setSelected(!selected)}
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
  )
}

export default ProjectCard
