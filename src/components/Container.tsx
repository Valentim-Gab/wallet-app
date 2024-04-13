import { YStack } from 'tamagui'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <YStack flex={1} padding="$2" bg="$background">
      {children}
    </YStack>
  )
}
