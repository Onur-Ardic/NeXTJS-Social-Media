'use client'

import { selectedColor } from '@/lib/slice/themeSlice'
import { useSelector } from 'react-redux'

export const ThemeWrapper = ({ children }) => {
  const selectedTheme = useSelector(selectedColor)
  console.log(selectedTheme)
  return <body className={selectedTheme}>{children}</body>
}
