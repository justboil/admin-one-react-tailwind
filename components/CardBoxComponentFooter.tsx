import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function CardBoxComponentFooter({ children }: Props) {
  return <footer className="p-6">{children}</footer>
}
