import { YStack, H2, Separator, useThemeName, Text } from 'tamagui'

import { EditScreenInfo } from './EditScreenInfo'

type ScreenContentProps = {
  title: string
  path: string
  children?: React.ReactNode
}

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <YStack flex={1} alignItems="center" justifyContent="center">
      <H2>{title}</H2>
      <Separator />
      <EditScreenInfo path={path} />
      {children}
      <Text color="$color">{useThemeName()}</Text>
    </YStack>
  )
}
