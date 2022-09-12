import { styleKey } from '../../src/config'
import { useAppDispatch } from '../../src/stores/hooks'
import { setStyle } from '../../src/stores/styleSlice'

export default function GlobalStyle() {
  const dispatch = useAppDispatch()

  dispatch(
    setStyle(
      typeof localStorage !== 'undefined' && localStorage[styleKey]
        ? localStorage[styleKey]
        : 'basic'
    )
  )

  return null
}
