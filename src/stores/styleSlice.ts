import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as styles from '../styles'
import { darkModeKey, styleKey } from '../config'

interface StyleState {
  asideStyle: string,
  asideScrollbarsStyle: string,
  asideBrandStyle: string,
  asideMenuItemStyle: string,
  asideMenuItemActiveStyle: string,
  asideMenuDropdownStyle: string,
  navBarItemLabelStyle: string,
  navBarItemLabelHoverStyle: string,
  navBarItemLabelActiveColorStyle: string,
  overlayStyle: string,
  darkMode: boolean
}

const initialState: StyleState = {
  asideStyle: '',
  asideScrollbarsStyle: '',
  asideBrandStyle: '',
  asideMenuItemStyle: '',
  asideMenuItemActiveStyle: '',
  asideMenuDropdownStyle: '',
  navBarItemLabelStyle: '',
  navBarItemLabelHoverStyle: '',
  navBarItemLabelActiveColorStyle: '',
  overlayStyle: '',
  darkMode: false
}

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setDarkMode: (state, action:PayloadAction<boolean|null>) => {
      state.darkMode = action.payload !== null ? action.payload : !state.darkMode

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(darkModeKey, state.darkMode ? '1' : '0')
      }

      if (typeof document !== 'undefined') {
        document.body.classList[state.darkMode ? 'add' : 'remove']('dark-scrollbars')

        document.documentElement.classList[state.darkMode ? 'add' : 'remove'](
          'dark-scrollbars-compat'
        )
      }
    },

    setStyle: (state, action: PayloadAction<string>) => {
      if (!styles[action.payload]) {
        return
      }

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(styleKey, action.payload)
      }

      const style = styles[action.payload]

      for (const key in style) {
        state[`${key}Style`] = style[key]
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode, setStyle } = styleSlice.actions

export default styleSlice.reducer
