import React from "react";
import { MenuAsideItem } from "../../../_interfaces";
import AsideMenuLayer from "./Layer";
import OverlayLayer from "../../../_components/OverlayLayer";

type Props = {
  menu: MenuAsideItem[];
  isAsideMobileExpanded: boolean;
  isAsideLgActive: boolean;
  onAsideLgClose: () => void;
  onRouteChange: () => void;
};

export default function AsideMenu({
  isAsideMobileExpanded = false,
  isAsideLgActive = false,
  ...props
}: Props) {
  return (
    <>
      <AsideMenuLayer
        menu={props.menu}
        className={`${isAsideMobileExpanded ? "left-0" : "-left-60 lg:left-0"} ${
          !isAsideLgActive ? "lg:hidden xl:flex" : ""
        }`}
        onAsideLgCloseClick={props.onAsideLgClose}
        onRouteChange={props.onRouteChange}
      />
      {isAsideLgActive && <OverlayLayer zIndex="z-30" onClick={props.onAsideLgClose} />}
    </>
  );
}
