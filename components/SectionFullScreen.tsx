import React, { ReactNode } from 'react'
import { BgKey } from '../interfaces'
import { gradientBgPurplePink, gradientBgDark, gradientBgPinkRed } from '../src/colors'
import { useAppSelector } from '../src/stores/hooks'

type Props = {
  bg: BgKey
  children: ReactNode
}

export default function SectionFullScreen({ bg, children }) {
  const darkMode = useAppSelector((state) => state.style.darkMode)

  let componentClass = 'flex min-h-screen items-center justify-center '

  if (darkMode) {
    componentClass += gradientBgDark
  } else if (bg === 'purplePink') {
    componentClass += gradientBgPurplePink
  } else if (bg === 'pinkRed') {
    componentClass += gradientBgPinkRed
  }

  return <div className={componentClass}>{children}</div>
}
