import { Stack, Link } from 'expo-router'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ScreenContent } from '@/components/ScreenContent'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home Edited' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Início" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  )
}
