import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StyleState {
  darkMode: boolean
}

const initialState: StyleState = {
  darkMode: false,
}

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean | null>) => {
      state.darkMode = action.payload !== null ? action.payload : !state.darkMode

      if (typeof document !== 'undefined') {
        document.body.classList[state.darkMode ? 'add' : 'remove']('dark-scrollbars')

        document.documentElement.classList[state.darkMode ? 'add' : 'remove'](
          'dark',
          'dark-scrollbars-compat'
        )
      }

      // You can persist dark mode setting
      // if (typeof localStorage !== 'undefined') {
      //   localStorage.setItem('darkMode', state.darkMode ? '1' : '0')
      // }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode } = styleSlice.actions

export default styleSlice.reducer
