import { Stack, useLocalSearchParams } from 'expo-router'
import { Text, useTheme } from 'tamagui'

import { Container } from '@/components/Container'
import { ScreenContent } from '@/components/ScreenContent'

export default function Details() {
  const { name } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen
        options={{
          headerTintColor: useTheme().color.val,
          headerTitle: () => <Text color="$color">Details</Text>,
          headerStyle: { backgroundColor: useTheme().background.val },
        }}
      />
      <Container>
        <ScreenContent path="screens/details/page.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </>
  )
}
