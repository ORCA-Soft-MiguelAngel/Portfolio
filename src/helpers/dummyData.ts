import { IconProp } from '@fortawesome/fontawesome-svg-core'

//img improts
import ecoclybImg from '../images/projects/img/ecoclyb.png'
import pizzaImg from '../images/projects/img/pizza.png'
import labs369Img from '../images/projects/img/369labs.png'
import kisshaImg from '../images/projects/img/kissha.png'
import aliciaImg from '../images/projects/img/alicia.png'
import vyrxImg from '../images/projects/img/vyrx.png'

//client icon
import labs369Icon from '../images/clients/369labs.jpeg'
import ecoclybIcon from '../images/clients/ecoclyb.png'

//stacks
import {
  awsStack,
  bootstrapStack,
  gatsbyStack,
  materialStack,
  mysqlStack,
  nodejsStack,
  reactStack,
  springStack,
  tailwindStack,
  techStack,
  tsStack,
} from './dummyTechs'

export type projectProps = {
  title: string
  content: string
  img: string
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
    url:'https://ecoclyb.com',
    techStack: [reactStack, tsStack, tailwindStack],
  },
  {
    title: '369 Labs',
    content:
      'Landing page for the 369 Labs Tech, a company that offers large-scale software solutions to a large number of customers of many areas.',
    img: labs369Img,
    url:'https://www.369labstech.com/',
    techStack: [reactStack, bootstrapStack, gatsbyStack],
  },
  {
    title: 'Kissha E-Commerce',
    content:
      'Web App for Kissha E-Commerce, a shopping app for beauty products with user system,shopping cart and purchase orders.',
    img: kisshaImg,
    url:'https://kissha-ecommerce-makeup.netlify.app',
    techStack: [reactStack, bootstrapStack, gatsbyStack, nodejsStack, mysqlStack],
  },
  {
    title: 'VYR-X',
    content:
      'Web app to manage the security personnel integrated in a company, whether it is internal or third-party security.',
    img: vyrxImg,
    url:'https://vyrx.netlify.app',
    techStack: [reactStack, materialStack, gatsbyStack, springStack, awsStack],
  },
  {
    title: 'Alicia Accounting',
    content:
      'Accounting web app to manage entries, accounts and balances more efficiently.',
    img: aliciaImg,
    url:'https://alicia-accounting.netlify.app',

    techStack: [reactStack, bootstrapStack, tsStack, springStack, mysqlStack],
  },
  {
    title: 'Pizza Simple Website',
    content:
      'Simple Pizza demo website, with responsive and interaction, baking updates for this one.',
    img: pizzaImg,
    url:'https://demo-pizza.netlify.app',
    techStack: [reactStack, tsStack],
  },
]

export const services: serviceProps[] = [
  {
    title: 'Apps Design',
    content:
      'Complete applications in all platforms (Mobile, Web, PC) from e-commerce to management systems, all tailored to your needs.',
    icon: 'code',
  },
  {
    title: 'Web Design',
    content:
      'Landing page design for the commercial promotion of your company, integrated with analytical feedback to improve the site.',
    icon: 'paint-brush',
  },
  {
    title: 'Dev. and Maintenance',
    content:
      'backend development and maintenance, as well as fundamental management of cloud platforms such as AWS.',
    icon: 'chart-line',
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
    category: 'Deploy',
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
    content: 'company that offers large-scale software solutions to a large number of customers of many areas.',
    img: labs369Icon,
  },
  {
    title: 'Ecoclyb',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: ecoclybIcon,
  },
  {
    title: 'Alicia',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: ecoclybIcon,
  },
]
