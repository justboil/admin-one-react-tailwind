import { useEffect } from 'react'
import { localStorageDarkModeKey } from '../../src/config'
import { useAppDispatch } from '../../src/stores/hooks'
import { setDarkMode } from '../../src/stores/styleSlice'

export default function GlobalDarkMode() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isSetInLocalStorage =
    typeof localStorage !== 'undefined' && localStorage[localStorageDarkModeKey]

    const isSetInMedia =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

    dispatch(
      setDarkMode(isSetInLocalStorage ? localStorage[localStorageDarkModeKey] === '1' : isSetInMedia)
    )
  })
  
  return null
}
