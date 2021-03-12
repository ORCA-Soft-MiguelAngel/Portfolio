import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionsContext from '../../contexts/SectionsContext'
import { skills } from '../../helpers/dummyData'
import '../../scss/githubButtons.scss'

type event = React.MouseEvent<HTMLElement>

const Skills: React.FC = () => {
  //STATES
  //selected category
  const [selectedCategory, setSelectedCategory] = useState<string>('Frontend')

  //HANDLERS
  //handle when you want to show other category
  const handleChangeCategory = (e: event) => {
    setSelectedCategory(e.currentTarget.id)
  }

  const context = useContext(SectionsContext)

  return (
    <section className="skills" ref={context?.skillsRef}>
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              I mainly do backend development with different languages, I work with the solutions
              from the approach of the model to the orchestration of the servers, especially in
              microservices, since it is conventional in large-scale systems. I also take care of
              the frontend design without any complications, providing ideas that prioritize the
              end-user experience. I would also highlight the handling basic on various cloud
              platforms.
            </p>
            <Link to="#">Read more</Link>
          </div>
          <div className="column right">
            {/**category section */}
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <ul className="cButton-group minor-group">
                {skills.map((skill, i) => (
                  <li key={`category-${i + 1}`}>
                    <span
                      id={skill.category}
                      onClick={handleChangeCategory}
                      className={`cButton pill _font-Ubuntu ${
                        selectedCategory === skill.category ? 'pick-this' : ''
                      }`}
                    >
                      {skill.category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/**stacks */}
            {skills
              .filter(({ category }) => category === selectedCategory)[0]
              .stacks.map(({ tech, percentage, icon }, i) => (
                <div key={`stack-${selectedCategory}-${tech}`} className="bars">
                  <div className="info">
                    <span>{tech}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className={`line p${percentage}`}></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
