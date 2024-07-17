import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  fontSize: 'text-sm',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, option) => {
      state.theme = option.payload
      localStorage.setItem('theme', state.theme)
    },

    setFontSize: (state, option) => {
      state.fontSize = option.payload
      localStorage.setItem('fontsize', state.fontSize)
    },
  },
})

export const { setTheme, setFontSize } = themeSlice.actions
export default themeSlice.reducer
