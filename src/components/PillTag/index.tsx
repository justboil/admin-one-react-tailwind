import React from 'react'
import { ColorKey } from '../../interfaces'
import { colorsBgLight, colorsOutline } from '../../colors'
import PillTagPlain from './Plain'

type Props = {
  label?: string
  color: ColorKey
  icon?: string | null
  small?: boolean
  outline?: boolean
  className?: string
  isGrouped?: boolean
}

const PillTag = ({ small = false, outline = false, className = '', ...props }: Props) => {
  const layoutClassName = small ? 'py-1 px-3' : 'py-1.5 px-4'
  const colorClassName = outline ? colorsOutline[props.color] : colorsBgLight[props.color]
  const groupedClassName = props.isGrouped ? 'mr-3 last:mr-0 mb-3' : ''

  return (
    <PillTagPlain
      className={`border rounded-full ${layoutClassName} ${colorClassName} ${groupedClassName} ${className}`}
      icon={props.icon}
      label={props.label}
      small={small}
    />
  )
}

export default PillTag
