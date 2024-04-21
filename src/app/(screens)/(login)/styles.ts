import { H1, Text, YStack, styled } from 'tamagui'

import { COLORS, FONTS } from '@/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'

export const ContentHeader = styled(YStack, {
  padding: '$5',
  marginTop: '$8',
  alignItems: 'center',
})

export const Title = styled(H1, {
  textAlign: 'center',
  fontSize: RFValue(24),
  fontFamily: FONTS.POPPINS_MEDIUM as any,
  color: COLORS.PURPLEDARK3,
})

export const Description = styled(Text, {
  marginTop: '$10',
  fontSize: RFValue(13),
  color: COLORS.GRAY4,
})
