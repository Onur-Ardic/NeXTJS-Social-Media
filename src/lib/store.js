import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import themeSlice from './slice/themeSlice'

export const Store = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      theme: themeSlice,
    },
  })
}
