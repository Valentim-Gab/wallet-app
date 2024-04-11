import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'

import config from '../../tamagui.config'

export default function Layout() {
  const [loaded] = useFonts({
    Poppins: require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
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
      <Stack />
    </TamaguiProvider>
  )
}
