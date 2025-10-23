"use client";

import React, { ReactNode, useState } from "react";
import { mdiClose, mdiDotsVertical } from "@mdi/js";
import { containerMaxW } from "../../../_lib/config";
import Icon from "../../../_components/Icon";
import NavBarItemPlain from "./Item/Plain";
import NavBarMenuList from "./MenuList";
import { MenuNavBarItem } from "../../../_interfaces";

type Props = {
  menu: MenuNavBarItem[];
  className: string;
  children: ReactNode;
};

export default function NavBar({ menu, className = "", children }: Props) {
  const [isMenuNavBarActive, setIsMenuNavBarActive] = useState(false);

  const handleMenuNavBarToggleClick = () => {
    setIsMenuNavBarActive(!isMenuNavBarActive);
  };

  const handleRouteChange = () => {
    setIsMenuNavBarActive(false);
  };

  return (
    <nav
      className={`${className} fixed inset-x-0 top-0 z-30 h-14 w-screen bg-gray-50 transition-(--transition-position) lg:w-auto dark:bg-slate-800`}
    >
      <div className={`flex lg:items-stretch ${containerMaxW}`}>
        <div className="flex h-14 flex-1 items-stretch">{children}</div>
        <div className="flex h-14 flex-none items-stretch lg:hidden">
          <NavBarItemPlain onClick={handleMenuNavBarToggleClick}>
            <Icon path={isMenuNavBarActive ? mdiClose : mdiDotsVertical} size="24" />
          </NavBarItemPlain>
        </div>
        <div
          className={`${
            isMenuNavBarActive ? "block" : "hidden"
          } absolute top-14 left-0 max-h-[calc(100dvh-(--spacing(14)))] w-screen overflow-y-auto bg-gray-50 shadow-lg lg:static lg:flex lg:w-auto lg:overflow-visible lg:shadow-none dark:bg-slate-800`}
        >
          <NavBarMenuList menu={menu} onRouteChange={handleRouteChange} />
        </div>
      </div>
    </nav>
  );
}
