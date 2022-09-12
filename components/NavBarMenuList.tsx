import React from 'react'
import { MenuNavBarItem } from '../interfaces'
import NavBarItem from './NavBarItem'

type Props = {
  menu: MenuNavBarItem[],
  onClick?: Function
}

export default function NavBarMenuList({ menu, onClick }: Props) {
  return (
    <>
      {menu.map((item, index) => <NavBarItem key={index} item={item} onClick={onClick} />)}
    </>
  )
}
