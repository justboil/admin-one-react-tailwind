import { mdiClose } from '@mdi/js'
import React, { ReactNode, useState } from 'react'
import { ColorKey } from '../interfaces'
import { colorsBgLight, colorsOutline } from '../colors'
import Button from './Button'
import Icon from './Icon'

type Props = {
  color: ColorKey
  icon?: string
  outline?: boolean
  children: ReactNode
  button?: ReactNode
}

const NotificationBar = ({ outline = false, children, ...props }: Props) => {
  const componentColorClass = outline ? colorsOutline[props.color] : colorsBgLight[props.color]

  const [isDismissed, setIsDismissed] = useState(false)

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault()

    setIsDismissed(true)
  }

  if (isDismissed) {
    return null
  }

  return (
    <div
      className={`px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150 ${componentColorClass}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          {props.icon && (
            <Icon path={props.icon} w="w-10 md:w-5" h="h-10 md:h-5" size="24" className="md:mr-2" />
          )}
          <span className="text-center md:text-left md:py-2">{children}</span>
        </div>
        {props.button}
        {!props.button && (
          <Button icon={mdiClose} color="white" onClick={dismiss} small roundedFull />
        )}
      </div>
    </div>
  )
}

export default NotificationBar
