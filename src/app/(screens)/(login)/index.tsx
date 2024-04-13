import { Stack } from 'expo-router'
import React from 'react'

import { ContentHeader, Description, Title } from './styles'

import { Container } from '@/components/Container'

export default function Login() {
  return (
    <>
      <Container>
        <ContentHeader>
          <Title>Seja bem vindo(a) {'\n'} a Wallet App</Title>
          <Description>Entrar com rede sociais</Description>
        </ContentHeader>
        {/* <ContentHeader>

        </ContentHeader>
        <ContentBody>

        </ContentBody>
        <ContentFooter>

        </ContentFooter> */}
      </Container>
    </>
  )
}
