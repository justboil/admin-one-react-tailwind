import React from "react";
import { MenuNavBarItem } from "../../../_interfaces";
import NavBarItem from "./Item";

type Props = {
  menu: MenuNavBarItem[];
};

export default function NavBarMenuList({ menu }: Props) {
  return (
    <>
      {menu.map((item, index) => (
        <NavBarItem key={index} item={item} />
      ))}
    </>
  );
}
