import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'

export const Store = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
    },
  })
}
