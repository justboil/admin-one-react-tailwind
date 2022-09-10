import { createSlice } from '@reduxjs/toolkit'
import * as styles from '../styles'
import { darkModeKey, styleKey } from '../config'

export const styleSlice = createSlice({
  name: 'style',
  initialState: {
    /* Styles */
    asideStyle: '',
    asideBrandStyle: '',
    asideMenuItemStyle: '',
    asideMenuItemActiveStyle: '',
    asideMenuDropdownStyle: '',
    navBarItemLabelStyle: '',
    navBarItemLabelHoverStyle: '',
    navBarItemLabelActiveColorStyle: '',
    overlayStyle: '',

    /* Dark mode */
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
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

    setStyle: (state, action) => {
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

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode, setStyle } = styleSlice.actions

export default styleSlice.reducer
