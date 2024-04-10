import { Container } from 'components/Container'
import { ScreenContent } from 'components/ScreenContent'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function Details() {
  const { name } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </>
  )
}
