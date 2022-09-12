import React, { ReactNode } from 'react'
import { useAppSelector } from '../src/stores/hooks'

type Props = {
  display?: string,
  useMargin?: boolean,
  children: ReactNode,
  onClick?: Function
}

export default function NavBarItemPlain({ display = 'flex', useMargin = false, onClick, children }: Props) {
  const navBarItemLabelStyle = useAppSelector((state) => state.style.navBarItemLabelStyle)
  const navBarItemLabelHoverStyle = useAppSelector((state) => state.style.navBarItemLabelHoverStyle)

  const classBase = 'items-center cursor-pointer dark:text-white dark:hover:text-slate-400'
  const classAddon = `${display} ${navBarItemLabelStyle} ${navBarItemLabelHoverStyle} ${
    useMargin ? 'my-2 mx-3' : 'py-2 px-3'
  }`

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  }

  return <div className={`${classBase} ${classAddon}`} onClick={handleClick}>{children}</div>
}
