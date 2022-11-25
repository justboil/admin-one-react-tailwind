import React, { ReactNode } from 'react'

type Props = {
  noPadding?: boolean
  className?: string
  children?: ReactNode
}

export default function CardBoxComponentBody({ noPadding = false, className, children }: Props) {
  return <div className={`flex-1 ${noPadding ? '' : 'p-6'} ${className}`}>{children}</div>
}
