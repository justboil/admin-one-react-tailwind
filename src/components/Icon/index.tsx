import React, { ReactNode } from 'react'

type Props = {
  path: string
  w?: string
  h?: string
  size?: string | number | null
  className?: string
  children?: ReactNode
}

export default function Icon({
  path,
  w = 'w-6',
  h = 'h-6',
  size = null,
  className = '',
  children,
}: Props) {
  const iconSize = size ?? 16

  return (
    <span className={`inline-flex justify-center items-center ${w} ${h} ${className}`}>
      <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} className="inline-block">
        <path fill="currentColor" d={path} />
      </svg>
      {children}
    </span>
  )
}
