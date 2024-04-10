import { forwardRef } from 'react'
import { ButtonProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Button as TButton, ButtonText } from '../../tamagui.config'

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  return (
    <TButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TButton>
  )
})
