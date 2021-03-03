import React, { useRef, useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import Footer from './Footer'
import Header from './Header'

const MainLayout: React.FC = ({ children }) => {
  //STATES
  //check if the scroll is down enough to change the header
  const [changeHeader, setChangeHeader] = useState<boolean>(false)

  //refs
  const bodyRef = useRef<HTMLDivElement | null>(null)

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
      <div>
        <Header changeHeader={changeHeader} />
      </div>
      <div ref={bodyRef}>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
