import { COLORS } from '@/styles/theme'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { YStack, styled } from 'tamagui'

const Container = styled(YStack, {
  width: '100%',
  backgroundColor: COLORS.GRAY6,
  paddingVertical: '$3',
  paddingHorizontal: '$5',
  gap: '$5',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$8',
  maxWidth: RFValue(310),
})

export default function InputMainRoot({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}
