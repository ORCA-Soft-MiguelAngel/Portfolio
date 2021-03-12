import React, { useContext } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import SectionsContext from '../../contexts/SectionsContext'
import img from '../../images/profile-1.jpeg'

const AboutMe: React.FC = () => {
  const context = useContext(SectionsContext)
  return (
    <section className="about" ref={context?.aboutRef}>
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={img} alt="" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Miguel Angel and I'm a{' '}
              <span className="typing-2">
                {' '}
                <ReactTypingEffect
                  text={['Developer', 'Freelance']}
                  speed={150}
                  eraseSpeed={100}
                  eraseDelay={3000}
                  typingDelay={1000}
                />
              </span>
            </div>
            <p>
              Since I started my journey as a freelance developer almost 4 years ago, I have
              teleworked for various clients, worked for companies employing software solutions, and
              collaborated with trained developers on various projects. I am quite curious and
              therefore I am constantly working on improving my skills.
            </p>
            <a href='https://drive.google.com/uc?export=download&id=1iaiPj-cbchWH1E10kh14Is95JImVAO02' download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
