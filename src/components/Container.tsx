import React from 'react'
import { YStack, YStackProps } from 'tamagui'

export default function Container(props: YStackProps) {
  return <YStack flex={1} padding="$2" bg="$background" {...props}></YStack>
}
