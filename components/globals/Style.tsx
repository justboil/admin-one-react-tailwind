import { useEffect } from 'react'
import { localStorageStyleKey } from '../../src/config'
import { useAppDispatch } from '../../src/stores/hooks'
import { setStyle } from '../../src/stores/styleSlice'

export default function GlobalStyle() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      setStyle(
        typeof localStorage !== 'undefined' && localStorage[localStorageStyleKey]
          ? localStorage[localStorageStyleKey]
          : 'basic'
      )
    )
  })

  return null
}
