import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userStatus: false,
  usermail: '',
  displayName: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userStatus = true
      state.usermail = action.payload.email
      state.displayName = action.payload.displayName
      localStorage.setItem('user', JSON.stringify(action.payload.email, action.payload.displayName))
    },
    logout: (state) => {
      state.userStatus = false
      state.userName = {}
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
