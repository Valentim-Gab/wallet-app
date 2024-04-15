import React, { ReactNode, createContext, useContext, useState } from 'react'
import { Theme, ThemeName } from 'tamagui'

const AppThemeContext = createContext({ theme: '', toggleTheme: () => {} })

interface ThemeContextType {
  children: ReactNode
  loadedTheme?: ThemeName
}

export function AppThemeProvider({ children, loadedTheme }: ThemeContextType) {
  const [theme, setTheme] = useState<string | ThemeName>(loadedTheme ?? 'dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme name={theme as ThemeName}>{children}</Theme>
    </AppThemeContext.Provider>
  )
}

export function useAppTheme() {
  const context = useContext(AppThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
