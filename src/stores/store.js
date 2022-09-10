import { configureStore } from '@reduxjs/toolkit'
import styleReducer from './styleSlice'
import mainReducer from './mainSlice'

export default configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer
  }
})