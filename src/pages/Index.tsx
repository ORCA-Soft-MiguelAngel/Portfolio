import React, { useEffect, useRef, useState } from 'react'
import ScrollUpBtn from '../components/Extras/ScrollUpBtn'
import ModalPopup from '../components/Home/ModalPopup'
import MainLayout from '../components/Layouts/MainLayout'
import { AboutMe, Contact, HomeSection, Projects, Services, Skills } from '../components/Sections'
import ReactGa from 'react-ga'
import axiosClient from '../config/axios'

const Index = () => {
  //STATES
  //modal state
  const [showModal, setShowModal] = useState<boolean>(false)

  //refs
  const scrollRef = useRef<HTMLDivElement | null>(null)

  //EFFECTS
  //initial effect
  useEffect(() => {
    //TEST
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:5000/tests/get', {
          method: 'GET',
        })
        const res = await result.json()
        console.log(result)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

    //wakeup
    axiosClient.get('/wakeup')

    ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`)

    //to report page view
    ReactGa.pageview('/')
  }, [])

  return (
    <MainLayout>
      <ScrollUpBtn refS={scrollRef} />
      {/**======= SECTION EXTRA - FLOATING THINGS =======*/}
      <ModalPopup showModal={showModal} setShowModal={setShowModal} />
      {/**======= SECTION 1 - ABOVE THE FOLD =======*/}
      <div ref={scrollRef}>
        <HomeSection showModal={showModal} setShowModal={setShowModal} />
      </div>
      {/**======= SECTION 2 - WHO I AM =======*/}
      <div>
        <AboutMe />
      </div>
      {/**======= SECTION 3 - SERVICES (DISABLED) =======*/}
      {/**
       *<div>
       *  <Services />
       *</div>
       */}
      {/**======= SECTION 4 - PROJECTS =======*/}
      <div>
        <Projects />
      </div>
      {/**======= SECTION 5 - SKILLS =======*/}
      <div>
        <Skills />
      </div>
      {/**======= SECTION 6 - CLIENTS =======*/}
      <div>
        <div>
          <Services />
        </div>
      </div>
      {/**======= SECTION 7 - CONTACT ME =======*/}
      <div>
        <Contact />
      </div>
    </MainLayout>
  )
}

export default Index
