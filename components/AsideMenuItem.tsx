
import React, { useState } from 'react'
import { mdiMinus, mdiPlus } from '@mdi/js'
import BaseIcon from './BaseIcon'
import Link from 'next/link'
import { getButtonColor } from '../src/colors'
import AsideMenuList from './AsideMenuList'
import { MenuAsideItem } from '../interfaces'
import { useAppSelector } from '../src/stores/hooks'

type Props = {
  item: MenuAsideItem,
  isDropdownList?: boolean
}

export default function AsideMenuItem({ item, isDropdownList = false }: Props) {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const asideMenuItemStyle = useAppSelector((state) => state.style.asideMenuItemStyle)
  const asideMenuDropdownStyle = useAppSelector((state) => state.style.asideMenuDropdownStyle)

  const asideMenuItemInnerContents = (
    <>
      {item.icon && <BaseIcon path={item.icon} className="flex-none" w="w-16" size="18" />}
      <span className={`grow text-ellipsis line-clamp-1 ${item.menu ? '' : 'pr-12'}`}>
        {item.label}
      </span>
      {item.menu && (
        <BaseIcon path={isDropdownActive ? mdiMinus : mdiPlus} className="flex-none" w="w-12" />
      )}
    </>
  )

  const componentClass = [
    'flex cursor-pointer',
    isDropdownList ? 'py-3 px-6 text-sm' : 'py-3',
    item.color
      ? getButtonColor(item.color, false, true)
      : `${asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`,
  ].join(' ')

  return (
    <li>
      {item.href && (
        <Link href={item.href} target={item.target}>
          <a className={componentClass}>{asideMenuItemInnerContents}</a>
        </Link>
      )}
      {!item.href && <div className={componentClass}>{asideMenuItemInnerContents}</div>}
      {item.menu && (
        <AsideMenuList
          menu={item.menu}
          className={`${asideMenuDropdownStyle} ${
            isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden'
          }`}
          isDropdownList
        />
      )}
    </li>
  )
}
