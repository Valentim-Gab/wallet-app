import React from 'react'

import { ContentHeader, Description, Title } from './styles'

import { Container } from '@/components/Container'
import { Link } from 'expo-router'
import { Button } from '@/components/Button'
import { useAppTheme } from '@/contexts/AppThemeProvider'
import ButtonSocialGoogle from '@/components/buttons/ButtonSocialGoogle'
import { View, YStack } from 'tamagui'
import ButtonSocialFacebook from '@/components/buttons/ButtonSocialFacebook'

export default function Login() {
  const { toggleTheme } = useAppTheme()

  return (
    <>
      <Container>
        <ContentHeader>
          <Title>Seja bem vindo(a) {'\n'} a Wallet App</Title>
          <Description>Entrar com</Description>
          <YStack flexDirection="row" gap="$4" marginTop="$4">
            <ButtonSocialGoogle title="Google" onPress={() => {}} />
            <ButtonSocialFacebook title="Facebook" onPress={() => {}} />
          </YStack>
        </ContentHeader>
        {/* <ContentHeader>

        </ContentHeader>
        <ContentBody>

        </ContentBody>
        <ContentFooter>

        </ContentFooter> */}

        {/* <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
        <Button
          onPress={() => {
            toggleTheme()
          }}
          title="ChangeTheme"
        /> */}
      </Container>
    </>
  )
}
