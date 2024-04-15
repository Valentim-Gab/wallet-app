import { H1, Text, YStack, styled } from 'tamagui'

import { FONTS } from '@/styles/theme'

export const ContentHeader = styled(YStack, {
  padding: '$5',
  marginTop: '$10',
  alignItems: 'center',
})

export const Title = styled(H1, {
  textAlign: 'center',
  fontSize: '$8',
  fontFamily: FONTS.POPPINS_MEDIUM as any,
})

export const Description = styled(Text, {
  marginTop: '$10',
  fontSize: '$4',
  fontFamily: FONTS.POPPINS_LIGHT as any,
  color: '$color',
})
