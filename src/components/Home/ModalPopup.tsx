import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useRef } from 'react'
import { animated, useSpring } from 'react-spring'
import telegram from '../../images/telegram.png'
import whatsapp from '../../images/whatsapp.png'
import { ModalPopupStyles } from './Styles'

type props = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPopup: React.FC<props> = ({ showModal, setShowModal }) => {
  //STYLES
  const {
    Background,
    ModalWrapper,
    Button,
    Divider,
    CloseButton,
    ModalContainer,
    Disclaimer,
    SocialDiv,
    Header,
    Footer,
  } = ModalPopupStyles

  //REFS
  const modalRef: any = useRef()

  //CALLBACKS
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
        console.log('I pressed')
      }
    },
    [setShowModal, showModal]
  )

  //EFFECTS
  //guess is when you press somethins? idk
  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  //HANDLERS
  //handle to close the modal
  const closeModal = () => setShowModal(false)

  //handle go to whatsapp
  const handleTelegram = () => {
    if (window) {
      window.open(`https://t.me/${process.env.REACT_APP_TELEGRAM_USERNAME}`)
    }
  }

  //handle go to telegram
  const handleWhatsapp = () => {
    if (window) {
      window.open(
        `https://wa.me/${
          process.env.REACT_APP_WHATSAPP_NUMBER
        }?text=${'Hi, i am interested in your services.'}`
      )
    }
  }

  //ANIMATIONS
  const animation: any = useSpring({
    config: {
      duration: 250,
      bounce: 2,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  })

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <Header>
                <h1 style={{ color: 'crimson' }}>Do you want to call me?</h1>
                <p>use any of the following alternatives:</p>
              </Header>
              <Divider />
              <ModalContainer>
                {/**whsap */}
                <SocialDiv>
                  <h2>WhatsApp</h2>
                  <div style={{ margin: '15px 0' }}>
                    <img src={whatsapp} alt="WhatsApp" width="80px" height="80px" />
                  </div>
                  <div>
                    <p>Talk to me from WhatsApp clicking below</p>
                  </div>
                  <Button color="#25d366" onClick={handleWhatsapp}>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                    <span>Chat with me!</span>
                  </Button>
                </SocialDiv>
                {/**telegram */}
                <SocialDiv>
                  <h2>Telegram</h2>
                  <div style={{ margin: '15px 0' }}>
                    <img src={telegram} alt="Telegram" width="80px" height="80px" />
                  </div>
                  <div>
                    <p>Talk to me from Telegram clicking below</p>
                  </div>
                  <Button color="#0088cc" onClick={handleTelegram}>
                    <FontAwesomeIcon icon={['fab', 'telegram']} />
                    <span>Chat with me!</span>
                  </Button>
                </SocialDiv>
              </ModalContainer>
              <Divider />
              {/**general */}
              <Footer>
                <h4>If you want something more... specific, call me at</h4>
                <h5>More details</h5>
                <div>
                  <p>
                    Tel.:<b> +1 809-668-0811</b>
                  </p>
                  <p>
                    Email.: <b>miguelangelpena.dev@gmail.com</b>
                  </p>
                </div>
              </Footer>
              {/**disclairmer */}
              <Disclaimer>
                <small>
                  In case of using whatsapp or telegram, remember that you must have WhatsApp web,
                  Telegram web, or their respective Desktop applications if you are from a computer.
                  if you do it from the mobile you only need to have the app installed{' '}
                </small>
              </Disclaimer>
              <CloseButton onClick={closeModal}>
                <FontAwesomeIcon icon="times" />
              </CloseButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

export default ModalPopup
