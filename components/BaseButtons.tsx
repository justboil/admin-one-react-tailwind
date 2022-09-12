import React, { ReactNode } from 'react'

type Props = {
  type?: string,
  mb?: string,
  noWrap: boolean,
  children: ReactNode
}

export default function BaseButtons({
  type = 'justify-start',
  mb = '-mb-3',
  noWrap = false,
  children,
}: Props) {
  const parentClass = `flex items-center ${type} ${mb} ${noWrap ? 'flex-nowrap' : 'flex-wrap'}`

  return <div className={parentClass}>{children}</div>
}
