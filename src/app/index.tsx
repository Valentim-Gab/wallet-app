import { Stack, Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ScreenContent } from '@/components/ScreenContent'

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={styles.headerTitle}>Home Edited</Text>,
        }}
      />
      <Container>
        <ScreenContent path="app/index.tsx" title="Início" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    color: 'purple',
    fontFamily: 'DMSerifDisplay',
  },
})
