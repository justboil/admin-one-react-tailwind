import { useSelector } from 'react-redux'
import GlobalDarkMode from '../globals/darkMode'
import GlobalStyle from '../globals/style'

export default function LayoutGuest({ children }) {
  const darkMode = useSelector(state => state.style.darkMode)

  return (
    <>
      <GlobalStyle />
      <GlobalDarkMode />
      
      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
          {children}
        </div>
      </div>
    </>
  )
}