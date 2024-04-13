import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TamaguiProvider } from 'tamagui'

import config from '../../tamagui.config'

import { AppThemeProvider } from '@/contexts/AppThemeProvider'

export default function Layout() {
  const session = false
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

  // function hasSession() {
  //   return session ? <Stack /> : <Login />
  // }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <AppThemeProvider loadedTheme="light">
          <StatusBar style="dark" translucent backgroundColor="transparent" />
          <Stack screenOptions={{ header: () => null }} />
        </AppThemeProvider>
      </SafeAreaView>
    </TamaguiProvider>
  )
}
