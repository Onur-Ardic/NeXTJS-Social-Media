'use client'

import { useSelector } from 'react-redux'
export const ThemeWrapper = ({ children }) => {
  const selectedTheme = useSelector((state) => state.theme.theme)
  const selectedFontSize = useSelector((state) => state.theme.fontSize)
  return <body className={`${selectedTheme}  ${selectedFontSize}`}>{children}</body>
}
