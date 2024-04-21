import { forwardRef } from 'react'
import { ButtonProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { Button, styled } from 'tamagui'

import { COLORS, FONTS } from '@/styles/theme'

const ButtonMainStyled = styled(Button, {
  backgroundColor: COLORS.PURPLEDARK2,
  color: COLORS.WHITE,
  width: RFValue(200),
  paddingVertical: RFValue(20),
  paddingHorizontal: RFValue(60),
  flexDirection: 'row',
  borderRadius: '$8',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: FONTS.POPPINS_MEDIUM as any,
  fontSize: RFValue(18),
  height: 'fit-content',
})

const ButtonMain = forwardRef<TouchableOpacity, ButtonProps>(({ title, ...props }, ref) => {
  return <ButtonMainStyled {...props}>{title}</ButtonMainStyled>
})

export default ButtonMain
