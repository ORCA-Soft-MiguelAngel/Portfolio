import React, { useContext } from 'react'
import SectionsContext from '../../contexts/SectionsContext'
import { services } from '../../helpers/dummyData'
import ServiceCard from '../Services/ServiceCard'

const Services: React.FC = () => {
  const context = useContext(SectionsContext)
  return (
    <section className="projects" ref={context?.servicesRef}>
      <div className="max-width">
        <h2 className="title title2">My services</h2>
        <div className="serv-content">
          {services.map((s, i) => (
            <ServiceCard
              key={`service-${i + 1}`}
              title={s.title}
              content={s.content}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
