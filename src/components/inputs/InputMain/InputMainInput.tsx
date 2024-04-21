import { COLORS, FONTS } from '@/styles/theme'
import React, { forwardRef } from 'react'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Input, InputProps, Label, YStack, styled } from 'tamagui'

interface InputMainInputProps extends InputProps {}

const InputM = styled(Input, {
  width: '100%',
  backgroundColor: 'transparent',
  fontSize: RFValue(16),
  placeholderTextColor: COLORS.GRAY4,
  borderRadius: 0,
  borderWidth: 0,
  padding: 0,
  margin: 0,
  flex: 1,
})

const InputMainInput = forwardRef<TextInput, InputMainInputProps>((props, ref) => {
  return <InputM {...props} ref={ref} />
})

export default InputMainInput
