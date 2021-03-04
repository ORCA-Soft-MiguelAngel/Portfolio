import { IconProp } from '@fortawesome/fontawesome-svg-core'

//img improts
import ecoclybImg from '../images/projects/img/ecoclyb.png'
import pizzaImg from '../images/projects/img/pizza.png'
import labs369Img from '../images/projects/img/369labs.png'
import kisshaImg from '../images/projects/img/kissha.png'
import aliciaImg from '../images/projects/img/alicia.png'
import vyrxImg from '../images/projects/img/vyrx.png'
import {
  awsStack,
  bootstrapStack,
  gatsbyStack,
  materialStack,
  mysqlStack,
  nodejsStack,
  reactStack,
  springStack,
  sqlServerStack,
  tailwindStack,
  techStack,
  tsStack,
} from './dummyTechs'

export type projectProps = {
  title: string
  content: string
  img: string
  selected: boolean
  url:string
  techStack: techStack[]
}

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

export const projects: projectProps[] = [
  {
    title: 'Ecoclyb Electric',
    content:
      'Landing page for the Ecoclyb Electric company, which is responsible for the  optimization of electrical systems and automated solutions for them.',
    img: ecoclybImg,
    selected: false,
    url:'https://ecoclyb.com',
    techStack: [reactStack, tsStack, tailwindStack],
  },
  {
    title: '369 Labs',
    content:
      'Landing page for the Ecoclyb Electric company, which is responsible for the  optimization of electrical systems and automated solutions for them.',
    img: labs369Img,
    selected: false,
    url:'https://www.369labstech.com/',
    techStack: [reactStack, bootstrapStack, gatsbyStack],
  },
  {
    title: 'Kissha E-Commerce',
    content:
      'Landing page for the Ecoclyb Electric company, which is responsible for the  optimization of electrical systems and automated solutions for them.',
    img: kisshaImg,
    selected: false,
    url:'https://kissha-ecommerce-makeup.netlify.app',
    techStack: [reactStack, bootstrapStack, gatsbyStack, nodejsStack, mysqlStack],
  },
  {
    title: 'VYR-X',
    content:
      'Landing page for the Ecoclyb Electric company, which is responsible for the  optimization of electrical systems and automated solutions for them.',
    img: vyrxImg,
    selected: false,
    url:'https://vyrx.netlify.app',
    techStack: [reactStack, materialStack, gatsbyStack, springStack, awsStack],
  },
  {
    title: 'Alicia Accounting',
    content:
      'Landing page for the Ecoclyb Electric company, which is responsible for the  optimization of electrical systems and automated solutions for them.',
    img: aliciaImg,
    selected: false,
    url:'https://alicia-accounting.netlify.app',

    techStack: [reactStack, bootstrapStack, tsStack, springStack, mysqlStack],
  },
  {
    title: 'Pizza Simple Website',
    content:
      'Landing page for the Ecoclyb Electric company, which is responsible for the  optimization of electrical systems and automated solutions for them.',
    img: pizzaImg,
    selected: false,
    url:'https://demo-pizza.netlify.app',
    techStack: [reactStack, tsStack],
  },
]

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
