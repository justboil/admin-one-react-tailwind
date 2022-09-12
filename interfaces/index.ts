export type UserPayloadObject = {
  name: string,
  email: string,
  avatar: string
}

export type MenuAsideItem = {
  label: string
  icon?: string,
  href?: string,
  target?: string,
  color?: string,
  isLogout?: boolean,
  menu?: MenuAsideItem[]
}

export type MenuNavBarItem = {
  label?: string
  icon?: string,
  href?: string,
  target?: string,
  isDivider?: boolean,
  isLogout?: boolean,
  isDesktopNoLabel?: boolean,
  isToggleLightDark?: boolean,
  isCurrentUser?: boolean,
  menu?: MenuNavBarItem[]
}

export type ColorKey = "white" | "light" | "contrast" | "success" | "danger" | "warning" | "info"

export type ColorButtonKey = "white" | "whiteDark" | "lightDark" | "contrast" | "success" | "danger" | "warning" | "info"

export type BgKey = "purplePink" | "pinkRed"