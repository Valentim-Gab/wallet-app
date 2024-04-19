import { COLORS, FONTS } from '@/styles/theme'
import { forwardRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, SizableText, YStack, styled } from 'tamagui'
import { AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { ButtonProps } from 'react-native'

const Button = styled(YStack, {
  width: RFValue(130),
  height: RFValue(60),
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  elevation: 4,
  shadowRadius: '$8',
  shadowOpacity: 0.2,
  shadowOffset: { width: 1, height: 1 },
  shadowColor: '#808080',
  backgroundColor: COLORS.WHITE,
  borderRadius: '$8',
  gap: '$2',
  padding: '$2',
})

const ButtonText = styled(SizableText, {
  fontSize: '$5',
  color: COLORS.GRAY4,
})

interface ButtonSocialGoogleProps {
  onPress: () => void
  title?: string
}

const ButtonSocialGoogle = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  return (
    <Button onPress={onPress}>
      <Image
        source={require('@/assets/imgs/logos/google-logo.png')}
        height={RFValue(24)}
        width={RFValue(24)}
        resizeMode="contain"
      />
      <ButtonText>{title ?? 'Google'}</ButtonText>
    </Button>
  )
})

export default ButtonSocialGoogle
