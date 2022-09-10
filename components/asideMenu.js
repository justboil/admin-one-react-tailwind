import AsideMenuLayer from './asideMenuLayer'
import OverlayLayer from './overlayLayer'

export default function AsideMenu({
  menu,
  isAsideMobileExpanded = false,
  isAsideLgActive = false,
}) {
  return (
    <>
      <AsideMenuLayer
        menu={menu}
        className={`${isAsideMobileExpanded ? 'left-0' : '-left-60 lg:left-0'} ${
          !isAsideLgActive ? 'lg:hidden xl:flex' : ''
        }`}
      />
      {isAsideLgActive && <OverlayLayer zIndex="z-30" />}
    </>
  )
}
