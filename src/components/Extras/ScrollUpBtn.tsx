import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'

type props = { refS: React.MutableRefObject<HTMLDivElement | null> }

const ScrollUpBtn: React.FC<props> = ({ refS }) => {
  //STATES
  const [show, setShow] = useState<boolean>(false)

  //check scroll position hook
  useScrollPosition(
    ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
      const isShow = currPos.y < -200
      if (isShow !== show) setShow(isShow)
    },
    [show],
    refS,
    false,
    150
  )

  //HANDLERS
  //hanadle go top
  const handleScrollToTop = () => {
    window && window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`scroll-up-btn${show ? ' show' : ''}`} onClick={handleScrollToTop}>
      <FontAwesomeIcon icon="angle-up" />
    </div>
  )
}

export default ScrollUpBtn
