import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TamaguiProvider, useTheme } from 'tamagui'

import config from '../../tamagui.config'

import { AppThemeProvider, useAppTheme } from '@/contexts/AppThemeProvider'

export default function Layout() {
  const [loaded] = useFonts({
    PoppinsLight: require('@/assets/fonts/Poppins/Poppins-Light.ttf'),
    PoppinsRegular: require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsMedium: require('@/assets/fonts/Poppins/Poppins-Medium.ttf'),
    PoppinsBold: require('@/assets/fonts/Poppins/Poppins-Bold.ttf'),
    PoppinsExtraBold: require('@/assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    DMSerifDisplay: require('@/assets/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf'),
    DMSans: require('@/assets/fonts/DM_Sans/static/DMSans-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <TamaguiProvider config={config}>
      <AppThemeProvider loadedTheme="dark">
        <Children />
      </AppThemeProvider>
    </TamaguiProvider>
  )
}

function Children() {
  const { theme } = useAppTheme()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === 'light' ? '#fff' : '#111',
      }}
    >
      <StatusBar
        style={theme === 'light' ? 'dark' : 'light'}
        translucent
        backgroundColor="transparent"
      />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  )
}
