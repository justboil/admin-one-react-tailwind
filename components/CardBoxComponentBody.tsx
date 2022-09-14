import React, { ReactNode } from 'react'

type Props = {
  noPadding?: boolean
  children?: ReactNode
}

export default function CardBoxComponentBody({ noPadding = false, children }: Props) {
  return <div className={`flex-1 ${noPadding ? '' : 'p-6'}`}>{children}</div>
}
