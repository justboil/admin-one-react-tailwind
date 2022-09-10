import { useSelector } from "react-redux"
import { mdiLogout, mdiClose } from "@mdi/js";
import BaseIcon from "./baseIcon";
import AsideMenuItem from "./asideMenuItem";
import AsideMenuList from "./asideMenuList";

export default function AsideMenuLayer({menu, className}) {
  const asideStyle = useSelector(state => state.style.asideStyle)
  const asideBrandStyle = useSelector(state => state.style.asideBrandStyle)
  const asideScrollbarsStyle = useSelector(state => state.style.asideScrollbarsStyle)
  const darkMode = useSelector(state => state.style.darkMode)

  const logoutItem = {
    label: "Logout",
    icon: mdiLogout,
    color: "info",
    isLogout: true,
  };

  return (
    <aside className={`${className} zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}>
      <div
        className={`lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900 ${asideStyle}`}
      >
        <div className={`flex flex-row h-14 items-center justify-between dark:bg-slate-900 ${asideBrandStyle}`}>
          <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
            <b className="font-black">One</b>
          </div>
          <button className="hidden lg:inline-block xl:hidden p-3">
            <BaseIcon path={mdiClose} />
          </button>
        </div>
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle}`}
        >
          <AsideMenuList menu={menu} />
        </div>
        <ul>
          <AsideMenuItem item={logoutItem} />
        </ul>
      </div>
    </aside>
  )
}