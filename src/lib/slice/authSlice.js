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
      localStorage.setItem('user', JSON.stringify(action.payload.email))
    },
    logout: (state, action) => {
      state.userStatus = action.payload
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
