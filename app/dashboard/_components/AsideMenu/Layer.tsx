import React from "react";
import { mdiLogout, mdiClose } from "@mdi/js";
import Icon from "../../../_components/Icon";
import AsideMenuItem from "./Item";
import AsideMenuList from "./List";
import { MenuAsideItem } from "../../../_interfaces";

type Props = {
  menu: MenuAsideItem[];
  className?: string;
  onAsideLgCloseClick: () => void;
  onRouteChange: () => void;
};

export default function AsideMenuLayer({ menu, className = "", ...props }: Props) {
  const logoutItem: MenuAsideItem = {
    label: "Logout",
    icon: mdiLogout,
    color: "info",
    isLogout: true,
  };

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onAsideLgCloseClick();
  };

  return (
    <aside
      className={`${className} zzz fixed top-0 z-40 flex h-screen w-60 overflow-hidden transition-(--transition-position) lg:py-2 lg:pl-2`}
    >
      <div
        className={`aside flex flex-1 flex-col overflow-hidden lg:rounded-2xl dark:bg-slate-900`}
      >
        <div
          className={`aside-brand flex h-14 flex-row items-center justify-between dark:bg-slate-900`}
        >
          <div className="flex-1 text-center lg:pl-6 lg:text-left xl:pl-0 xl:text-center">
            <b className="font-black">One</b>
          </div>
          <button
            className="hidden p-3 lg:inline-block xl:hidden"
            onClick={handleAsideLgCloseClick}
          >
            <Icon path={mdiClose} />
          </button>
        </div>
        <div
          className={`aside-scrollbar flex-1 overflow-x-hidden overflow-y-auto dark:scrollbar-styled-dark`}
        >
          <AsideMenuList menu={menu} onRouteChange={props.onRouteChange} />
        </div>
        <ul>
          <AsideMenuItem item={logoutItem} onRouteChange={props.onRouteChange} />
        </ul>
      </div>
    </aside>
  );
}
