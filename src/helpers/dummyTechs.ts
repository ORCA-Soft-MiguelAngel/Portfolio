//icon imports
import reactIcon from '../images/projects/icons/react.png'
import tsIcon from '../images/projects/icons/typescript.png'
import tailwindIcon from '../images/projects/icons/tailwind.png'
import gatsbyIcon from '../images/projects/icons/gatsby.png'
import bootstrapIcon from '../images/projects/icons/bootstrap.png'
import materialIcon from '../images/projects/icons/material.png'
import mysqlIcon from '../images/projects/icons/mysql.png'
import sqlServerIcon from '../images/projects/icons/sqlserver.png'
import springIcon from '../images/projects/icons/spring.png'
import nodejsIcon from '../images/projects/icons/nodejs.png'
import awsIcon from '../images/projects/icons/aws.png'

export type techStack = {
  icon: string
  tooltip: string
}

type tch = techStack
export const reactStack: tch = {
  icon: reactIcon,
  tooltip: 'React',
}
export const tsStack: tch = {
  icon: tsIcon,
  tooltip: 'Typescript',
}
export const tailwindStack: tch = {
  icon: tailwindIcon,
  tooltip: 'Tailwind CSS',
}

export const gatsbyStack: tch = {
  icon: gatsbyIcon,
  tooltip: 'Gatsby',
}

export const bootstrapStack: tch = {
  icon: bootstrapIcon,
  tooltip: 'Bootstrap',
}
export const materialStack: tch = {
  icon: materialIcon,
  tooltip: 'Material UI',
}

export const mysqlStack: tch = {
  icon: mysqlIcon,
  tooltip: 'MySql',
}
export const sqlServerStack: tch = {
  icon: sqlServerIcon,
  tooltip: 'SQL Server',
}
export const springStack: tch = {
  icon: springIcon,
  tooltip: 'Spring',
}
export const nodejsStack: tch = {
  icon: nodejsIcon,
  tooltip: 'Node Js',
}
export const awsStack: tch = {
  icon: awsIcon,
  tooltip: 'AWS',
}
