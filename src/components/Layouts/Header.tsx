import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type props = {
  changeHeader: boolean
}

const Header: React.FC<props> = ({ changeHeader }) => {
  //STATE
  //manage to show menu in mobile devices
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  //HANDLERs
  //toggle the menu on mobile
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className={`navbar ${changeHeader ? 'sticky':''}`}>
      <div className="max-width">
        <div className="logo">
          <Link to="#">
            Portfo<span>lio.</span>
          </Link>
        </div>
        <ul className={`menu ${toggleMenu ? 'active':''}`}>
          <li>
            <Link to="#home" className="menu-btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" className="menu-btn">
              About
            </Link>
          </li>
          <li>
            <Link to="#services" className="menu-btn">
              Services
            </Link>
          </li>
          <li>
            <Link to="#projects" className="menu-btn">
              Projects
            </Link>
          </li>
          <li>
            <Link to="#skills" className="menu-btn">
              Skills
            </Link>
          </li>
          <li>
            <Link to="#clients" className="menu-btn">
              Clients
            </Link>
          </li>
          <li>
            <Link to="#contact" className="menu-btn">
              Contact
            </Link>
          </li>
        </ul>
        <div className="menu-btn" onClick={handleToggleMenu}>
          {toggleMenu ? <FontAwesomeIcon icon="times" /> : <FontAwesomeIcon icon="bars" />}
        </div>
      </div>
    </nav>
  )
}

export default Header
