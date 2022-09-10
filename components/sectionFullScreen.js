import { useSelector } from 'react-redux'
import {
  gradientBgPurplePink,
  gradientBgDark,
  gradientBgPinkRed,
} from "../src/colors"; 

export default function SectionFullScreen({ bg, children }) {
  const darkMode = useSelector(state => state.style.darkMode)

  let componentClass = 'flex min-h-screen items-center justify-center '

  if (darkMode) {
    componentClass += gradientBgDark
  } else if (bg === 'purplePink') {
    componentClass += gradientBgPurplePink
  } else if (bg === 'pinkRed') {
    componentClass += gradientBgPinkRed
  }

  return (
    <div className={componentClass}>
      {children}
    </div>
  )
}