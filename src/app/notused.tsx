import { Stack, Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import { Text, Button as BtnTamagui, useTheme } from 'tamagui'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ScreenContent } from '@/components/ScreenContent'
import { useAppTheme } from '@/contexts/AppThemeProvider'

export default function Home2() {
  const appTheme = useAppTheme()

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={styles.headerTitle} color="$color">
              Home Edited
            </Text>
          ),
          headerStyle: { backgroundColor: useTheme().background.val },
        }}
      />
      <Container>
        <ScreenContent path="app/index.tsx" title="Início" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
        <BtnTamagui
          onPress={() => {
            appTheme.toggleTheme()
          }}
        >
          ChangeTheme
        </BtnTamagui>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontFamily: 'DMSerifDisplay',
  },
})
