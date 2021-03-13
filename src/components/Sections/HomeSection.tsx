import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect'
import SectionsContext from '../../contexts/SectionsContext'
import ReactGa from 'react-ga'

type props = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const HomeSection: React.FC<props> = ({ showModal, setShowModal }) => {
  //HANDLERS
  //open modal
  const handleOpenModal = () => {

    //Analytic
    ReactGa.event({
      category: 'Button',
      action: 'Call or chat with me',
    })
    setShowModal((prev) => !prev)
  }

  const context = useContext(SectionsContext)

  return (
    <section className="home" ref={context?.homeRef}>
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hi, my name is</div>
          <div className="text-2">Miguel Angel</div>
          <div className="text-3">
            And I'm a{' '}
            <span className="typing">
              <ReactTypingEffect
                text={['Developer', 'Freelance']}
                speed={150}
                eraseSpeed={100}
                eraseDelay={3000}
                typingDelay={1000}
              />
            </span>
          </div>
          <Link to="#" onClick={handleOpenModal}>
            <FontAwesomeIcon
              icon="phone"
              style={{ marginRight: '15px', transform: 'rotateY(180deg)' }}
            />
            <span>Call or chat with me!</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
