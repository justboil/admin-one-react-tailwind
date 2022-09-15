import React from 'react'
import { ColorKey } from '../interfaces'
import { colorsBgLight, colorsOutline } from '../src/colors'
import PillTagPlain from './PillTagPlain'

type Props = {
  label?: string
  color: ColorKey
  icon?: string
  small?: boolean
  outline?: boolean
  isGrouped?: boolean
}

const PillTag = ({ small = false, outline = false, isGrouped = false, ...props }: Props) => {
  const layoutClassName = small ? 'py-1 px-3' : 'py-1.5 px-4'
  const colorClassName = outline ? colorsOutline[props.color] : colorsBgLight[props.color]
  const groupedClassName = isGrouped ? 'mr-3 last:mr-0 mb-3' : ''

  return (
    <PillTagPlain
      className={`border rounded-full ${layoutClassName} ${colorClassName} ${groupedClassName}`}
      icon={props.icon}
      label={props.label}
      small={small}
    />
  )
}

export default PillTag
