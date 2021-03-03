import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer>
      <span>
        Created By <Link to="#">Miguel Angel Peña Santos</Link> |{' '}
        <FontAwesomeIcon icon="copyright" /> {new Date().getFullYear()} All rights reserved.
      </span>
    </footer>
  )
}

export default Footer
