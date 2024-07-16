'use client'

import { useSelector } from 'react-redux'
export const ThemeWrapper = ({ children }) => {
  const selectedTheme = useSelector((state) => state.theme.theme)
  return <body className={selectedTheme}>{children}</body>
}
