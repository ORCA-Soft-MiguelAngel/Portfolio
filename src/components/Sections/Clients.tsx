import React from 'react'
import { clients } from '../../helpers/dummyData'
import ClientCard from '../Clients/ClientCard'

const Clients: React.FC = () => {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Clients</h2>

        <div className="client-cont">
          {clients.map(({ title, content, img }, i) => (
            <ClientCard key={`client-${i + 1}`} title={title} content={content} img={img} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
