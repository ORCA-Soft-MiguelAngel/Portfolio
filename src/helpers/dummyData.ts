import { IconProp } from '@fortawesome/fontawesome-svg-core'

type serviceProps = {
  title: string
  content: string
  icon: IconProp
}

type skillsProps = {
  category: string
  stacks: {
    tech: string
    percentage: number
    icon?: string
  }[]
}

type clientProps = {
  title: string
  content: string
  img: string
}

export const services: serviceProps[] = [
  {
    title: 'Advertising',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quoillo enim.',
    icon: 'chart-line',
  },
  {
    title: 'Apps Design',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quoillo enim.',
    icon: 'code',
  },
  {
    title: 'Web Design',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quoillo enim.',
    icon: 'paint-brush',
  },
]

export const skills: skillsProps[] = [
  {
    category: 'Frontend',
    stacks: [
      { tech: 'HTML', percentage: 95 },
      { tech: 'CSS', percentage: 95 },
      { tech: 'Javascript', percentage: 90 },
      { tech: 'Typescript', percentage: 80 },
      { tech: 'React', percentage: 85 },
    ],
  },
  {
    category: 'Backend',
    stacks: [
      { tech: 'Spring', percentage: 90 },
      { tech: 'NodeJs', percentage: 85 },
      { tech: '.NET', percentage: 65 },
      { tech: 'SQL (MySql, SQLServer, Etc...)', percentage: 80 },
      { tech: 'Microservices', percentage: 80 },
    ],
  },
  {
    category: 'Deploy & Cloud',
    stacks: [
      { tech: 'AWS', percentage: 65 },
      { tech: 'Heroku', percentage: 70 },
      { tech: 'Netlify', percentage: 70 },
      { tech: 'Git', percentage: 85 },
      { tech: 'Docker', percentage: 75 },
    ],
  },
]

export const clients: clientProps[] = [
  {
    title: '369 Labs',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: '',
  },
  {
    title: 'Ecoclyb',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: '',
  },
  {
    title: 'Alguien',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: '',
  },
]
