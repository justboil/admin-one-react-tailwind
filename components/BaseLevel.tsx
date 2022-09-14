import React, { ReactNode } from 'react'

type Props = {
  mobile?: boolean
  type?: string
  className?: string
  children?: ReactNode
}

export default function BaseLevel({
  mobile = false,
  type = 'justify-between',
  className = '',
  children,
}: Props) {
  const parentClass = `${type} items-center`

  const parentMobileClass = 'flex'

  const parentBaseClass = 'block md:flex'

  return (
    <div className={`${parentClass} ${className} ${mobile ? parentMobileClass : parentBaseClass}`}>
      {children}
    </div>
  )
}
