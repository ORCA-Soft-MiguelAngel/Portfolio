import React from 'react'

type sectionContext = {
  homeRef: React.MutableRefObject<HTMLDivElement | null>
  aboutRef: React.MutableRefObject<HTMLDivElement | null>
  projectsRef: React.MutableRefObject<HTMLDivElement | null>
  skillsRef: React.MutableRefObject<HTMLDivElement | null>
  servicesRef: React.MutableRefObject<HTMLDivElement | null>
  contactRef: React.MutableRefObject<HTMLDivElement | null>
} | null

const SectionsContext = React.createContext<sectionContext>(null)

export default SectionsContext
