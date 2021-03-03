import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type props = {
  icon: IconProp
  title: string
  content: string
}

const ServiceCard: React.FC<props> = ({ content, icon, title }) => {
  return (
    <div className="card">
      <div className="box">
        <FontAwesomeIcon icon={icon} className="i" />
        <div className="text">{title}</div>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ServiceCard
