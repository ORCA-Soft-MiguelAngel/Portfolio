import React from 'react'
import defaultImg from '../../images/profile-1.jpeg'

type props = {
  title: string
  content: string
  img?: string
}

const ClientCard: React.FC<props> = ({ title, content, img }) => {
  return (
    <div className="client-card obj">
      <div className="box">
        <img src={img ? img : defaultImg} alt="" />
        <div className="text">{title}</div>
       
      </div>
    </div>
  )
}

export default ClientCard
