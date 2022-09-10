import Link from "next/link";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";
import BaseDivider from "./baseDivider";
import BaseIcon from "./baseIcon";
import UserAvatarCurrentUser from "./userAvatarCurrentUser";
import NavBarMenuList from "./navBarMenuList";

export default function NavBarItem({ item }) {
  const navBarItemLabelActiveColorStyle = useSelector(state => state.style.navBarItemLabelActiveColorStyle)
  const navBarItemLabelStyle = useSelector(state => state.style.navBarItemLabelStyle)
  const navBarItemLabelHoverStyle = useSelector(state => state.style.navBarItemLabelHoverStyle)

  const userName = useSelector(state => state.main.userName)
  
  const [isDropdownActive, setIsDropdownActive] = useState(false)

  const componentClass = [
    "block lg:flex items-center relative cursor-pointer",
    isDropdownActive 
      ? `${navBarItemLabelActiveColorStyle} dark:text-slate-400`
      : `${navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${navBarItemLabelHoverStyle}`,
    item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3",
    item.isDesktopNoLabel ? "lg:w-16 lg:justify-center" : ""
  ].join(' ')

  const itemLabel = item.isCurrentUser ? userName : item.label

  const NavBarItemComponentContents = (
    <>
      <div className={`flex items-center ${item.menu ? 'bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0' : ''}`}>
        {item.isCurrentUser && <UserAvatarCurrentUser className="w-6 h-6 mr-3 inline-flex" />}
        {item.icon && <BaseIcon path={item.icon} className="transition-colors" />}
        <span className={`px-2 transition-colors ${item.isDesktopNoLabel && item.icon ? 'lg:hidden' : ''}`}>
          {itemLabel}
        </span>
        {item.menu && <BaseIcon path={isDropdownActive ? mdiChevronUp : mdiChevronDown} className="hidden lg:inline-flex transition-colors" />}
      </div>
      {item.menu && (
        <div
          className={`${!isDropdownActive ? 'lg:hidden' : ''} text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700`}
        >
          <NavBarMenuList menu={item.menu} onClick={() => setIsDropdownActive(!isDropdownActive)} />
        </div>
      )}
    </>
  )

  if (item.isDivider) {
    return <BaseDivider navBar />
  }

  if (item.href) {
    return (
      <Link
        href={item.href}
        
      >
        <a className={componentClass}>
          {NavBarItemComponentContents}
        </a>
      </Link>
    )
  }

  return (
    <div className={componentClass}>
      {NavBarItemComponentContents}
    </div>
  )
}