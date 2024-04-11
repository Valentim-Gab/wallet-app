import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'
// import {
//   Poppins_300Light,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_700Bold,
//   Poppins_800ExtraBold,
// } from '@expo-google-fonts/poppins'

// import { DMSans_400Regular } from '@expo-google-fonts/dm-sans'
// import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'

import config from '../../tamagui.config'

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    // Poppins_300Light,
    // Poppins_400Regular,
    // Poppins_500Medium,
    // Poppins_700Bold,
    // Poppins_800ExtraBold,
    // DMSans_400Regular,
    // DMSerifDisplay_400Regular,
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <TamaguiProvider config={config} >
      <Stack />
    </TamaguiProvider>
  )
}
