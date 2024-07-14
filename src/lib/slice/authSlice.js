import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: false,
  userInfo: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.userInfo = action.meta.userInfo
      localStorage.setItem('user', JSON.stringify(action.meta.userInfo))
    },

    logout: (state) => {
      state.user = false
      state.userName = {}
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
