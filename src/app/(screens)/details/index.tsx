import { Stack, useLocalSearchParams, useNavigation } from 'expo-router'
import { Header, Text, View, useTheme } from 'tamagui'

import { Container } from '@/components/Container'
import { ScreenContent } from '@/components/ScreenContent'

import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'
import { Button } from '@/components/Button'
import { TouchableOpacity } from 'react-native'

export default function Details() {
  const { name } = useLocalSearchParams()
  const navigation = useNavigation()

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <View style={{ marginTop: 0 }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text color={'$color'}>{'<-'} BACK</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Container>
        <ScreenContent path="screens/details/page.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </>
  )
}
