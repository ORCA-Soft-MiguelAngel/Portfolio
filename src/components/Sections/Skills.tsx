import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error
              est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis
              minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam
              et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut
              hic explicabo minus quod.
            </p>
            <Link to="#">Read more</Link>
          </div>
          <div className="column right">
            {/**category section */}
            <div style={{textAlign:'center',marginBottom:'10px'}}>
              <ul className="button-group minor-group">
                {skills.map((skill, i) => (
                  <li key={`category-${i + 1}`}>
                    <span
                      id={skill.category}
                      onClick={handleChangeCategory}
                      className={`button pill _font-Ubuntu ${
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
