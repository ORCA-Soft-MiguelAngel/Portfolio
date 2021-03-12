import React, { useRef, useState } from 'react'
import SectionsContext from '../../contexts/SectionsContext'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import Footer from './Footer'
import Header from './Header'

type refT = HTMLDivElement | null

const MainLayout: React.FC = ({ children }) => {
  //STATES
  //check if the scroll is down enough to change the header
  const [changeHeader, setChangeHeader] = useState<boolean>(false)

  //refs
  const bodyRef = useRef<refT>(null)
  const homeRef = useRef<refT>(null)
  const aboutRef = useRef<refT>(null)
  const projectsRef = useRef<refT>(null)
  const skillsRef = useRef<refT>(null)
  const servicesRef = useRef<refT>(null)
  const contactRef = useRef<refT>(null)

  //check scroll position hook
  useScrollPosition(
    ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
      //concerning about header section
      const isShow = currPos.y < -50
      if (isShow !== changeHeader) setChangeHeader(isShow)
    },
    [changeHeader],
    bodyRef,
    false,
    150
  )

  return (
    <div>
      <SectionsContext.Provider
        value={{
          homeRef,
          aboutRef,
          projectsRef,
          skillsRef,
          servicesRef,
          contactRef,
        }}
      >
        <div>
          <Header changeHeader={changeHeader} />
        </div>
        <div ref={bodyRef}>{children}</div>
        <div>
          <Footer />
        </div>
      </SectionsContext.Provider>
    </div>
  )
}

export default MainLayout
