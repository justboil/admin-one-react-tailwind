import { darkModeKey } from '../../src/config'
import { useAppDispatch } from '../../src/stores/hooks'
import { setDarkMode } from '../../src/stores/styleSlice'

export default function GlobalDarkMode() {
  const dispatch = useAppDispatch()

  const isSetInLocalStorage = typeof localStorage !== 'undefined' && localStorage[darkModeKey]
  const isSetInMedia =
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

  dispatch(setDarkMode(isSetInLocalStorage ? localStorage[darkModeKey] === '1' : isSetInMedia))

  return null
}
