import { FontAwesome5, Octicons } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import { Button } from 'react-native'
import { Form, Text, ScrollView, YStack } from 'tamagui'
import { z } from 'zod'

import { ContentHeader, Description, Title } from './styles'

import ButtonSocialFacebook from '@/components/buttons/ButtonSocialFacebook'
import ButtonSocialGoogle from '@/components/buttons/ButtonSocialGoogle'
import { InputMain } from '@/components/inputs/InputMain'
import { useAppTheme } from '@/contexts/AppThemeProvider'
import { COLORS } from '@/styles/theme'
import ButtonMain from '@/components/buttons/ButtonMain'
import { RFValue } from 'react-native-responsive-fontsize'
import Container from '@/components/Container'

const formSchema = z.object({
  username: z.string().min(1, { message: 'Campo obrigatório' }),
  password: z.string().min(1, { message: 'Campo obrigatório' }),
})

// type Fields = z.infer<typeof schema>

export default function Login() {
  const { toggleTheme } = useAppTheme()

  // const { control, handleSubmit, setFocus } = useForm<Fields>({
  //   resolver: zodResolver(schema),
  // })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <ScrollView backgroundColor={COLORS.WHITE}>
      <Container paddingBottom="$10">
        <ContentHeader>
          <Title>Seja bem vindo a{'\n'}Wallet App</Title>
          <Description>Entrar com</Description>
          <YStack flexDirection="row" gap="$4" marginTop="$4">
            <ButtonSocialGoogle title="Google" onPress={() => {}} />
            <ButtonSocialFacebook title="Facebook" onPress={() => {}} />
          </YStack>
        </ContentHeader>

        <FormProvider {...form}>
          <Form onSubmit={form.handleSubmit(onSubmit)} alignItems="center" marginTop="$4" gap="$2">
            <Controller
              control={form.control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <YStack>
                  <InputMain.Root>
                    <FontAwesome5 name="user" size={24} color={COLORS.GRAY4} />
                    <InputMain.Input
                      {...field}
                      placeholder="Usuário"
                      onChangeText={field.onChange}
                    />
                  </InputMain.Root>
                  <Text color={COLORS.RED}>{error?.message}</Text>
                </YStack>
              )}
            />
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <YStack>
                  <InputMain.Root>
                    <Octicons name="key-asterisk" size={24} color={COLORS.GRAY4} />
                    <InputMain.Input
                      {...field}
                      secureTextEntry
                      placeholder="Senha"
                      onChangeText={field.onChange}
                    />
                  </InputMain.Root>
                  <Text color={COLORS.RED}>{error?.message}</Text>
                </YStack>
              )}
            />
            <YStack marginTop="$6">
              <ButtonMain title="Login" onPress={form.handleSubmit(onSubmit)} />
            </YStack>
          </Form>
        </FormProvider>

        <YStack alignItems="center" marginTop="$3">
          <Text color={COLORS.GRAY4} fontSize={RFValue(13)}>
            Não tem uma conta? <Text color={COLORS.BLUE3}>Cadastre-se</Text>
          </Text>
        </YStack>

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
    </ScrollView>
  )
}
