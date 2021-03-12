import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionsContext from '../../contexts/SectionsContext'

type props = {
  changeHeader: boolean
}

type travelEvent = (
  e: React.MouseEvent<HTMLAnchorElement>,
  ref: React.MutableRefObject<HTMLDivElement>
) => void

const Header: React.FC<props> = ({ changeHeader }) => {
  //STATE
  //manage to show menu in mobile devices
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  //CONTEXT
  const context = useContext(SectionsContext)

  const linkArr: {
    name: string
    contextRef: React.MutableRefObject<HTMLDivElement | null> | undefined
  }[] = [
    {
      name: 'Home',
      contextRef: context?.homeRef,
    },
    {
      name: 'About',
      contextRef: context?.aboutRef,
    },
    {
      name: 'Projects',
      contextRef: context?.projectsRef,
    },
    {
      name: 'Skills',
      contextRef: context?.skillsRef,
    },
    {
      name: 'Services',
      contextRef: context?.servicesRef,
    },
    {
      name: 'Contact',
      contextRef: context?.contactRef,
    },
  ]

  //HANDLERs
  //toggle the menu on mobile
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleTravel: travelEvent = (e, ref) => {
    e.preventDefault()
    toggleMenu && setToggleMenu(!toggleMenu)
    if (ref) {
      window.scrollTo({
        behavior: 'smooth',
        top: ref.current.offsetTop,
      })
    }
  }

  return (
    <nav className={`navbar ${changeHeader ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            Portfo<span>lio.</span>
          </Link>
        </div>
        <ul className={`menu ${toggleMenu ? 'active' : ''}`}>
          {linkArr.map((link, i) => (
            <li key={`link-${link.name}-${i}`}>
              <Link
                to=""
                className="menu-btn"
                onClick={(e) =>
                  handleTravel(e, link.contextRef as React.MutableRefObject<HTMLDivElement>)
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-btn" onClick={handleToggleMenu}>
          {toggleMenu ? <FontAwesomeIcon icon="times" /> : <FontAwesomeIcon icon="bars" />}
        </div>
      </div>
    </nav>
  )
}

export default Header
