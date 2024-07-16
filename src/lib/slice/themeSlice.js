import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, option) => {
      state.theme = option.payload
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
export const selectedColor = (state) => state.theme
