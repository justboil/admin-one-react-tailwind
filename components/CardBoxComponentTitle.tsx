import React, { ReactNode } from 'react'

type Props = {
  title: string
  children?: ReactNode
}

const CardBoxComponentTitle = ({ title, children }: Props) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <h1 className="text-2xl">{title}</h1>
      {children}
    </div>
  )
}

export default CardBoxComponentTitle
