import React from 'react'
import { services } from '../../helpers/dummyData'
import ServiceCard from '../Services/ServiceCard'

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
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
