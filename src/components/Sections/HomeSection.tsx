import React from 'react'
import { Link } from 'react-router-dom'

const HomeSection: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hi, my name is</div>
          <div className="text-2">Miguel Angel</div>
          <div className="text-3">
            And I'm a <span className="typing"></span>
          </div>
          <Link to="#">Hire me</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
