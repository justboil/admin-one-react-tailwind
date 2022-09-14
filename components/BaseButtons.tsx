import React, { Children, cloneElement, ReactNode } from 'react'

type Props = {
  type?: string
  mb?: string
  noWrap?: boolean
  children: ReactNode
}

const BaseButtons = ({ type = 'justify-start', mb = '-mb-3', noWrap = false, children }: Props) => {
  return (
    <div className={`flex items-center ${type} ${mb} ${noWrap ? 'flex-nowrap' : 'flex-wrap'}`}>
      {children}
    </div>
  )
}

export default BaseButtons
