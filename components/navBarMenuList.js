import NavBarItem from "./NavBarItem";

export default function NavBarMenuList({menu, handleMenuClick}) {
  return menu.map((item, index) => (
    <NavBarItem key={index} item={item} onClick={handleMenuClick} />
  ))
}