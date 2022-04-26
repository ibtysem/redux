import { configureStore } from '@reduxjs/toolkit'
import itekSlice from '../itekSlice/itekSlice'

export const store = configureStore({
  reducer: {
      itek:itekSlice,
  },
})