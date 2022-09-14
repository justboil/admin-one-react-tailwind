import React, { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const SectionBanner = ({ className = '', children }: Props) => {
  return (
    <div className={`${className} rounded-2xl py-12 px-6 lg:px-12 text-center`}>{children}</div>
  )
}

export default SectionBanner
