import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { ScreenContent } from 'components/ScreenContent'
import { Stack, Link } from 'expo-router'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home Edited' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  )
}
