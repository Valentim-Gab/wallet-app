import { COLORS, FONTS } from '@/styles/theme'
import { forwardRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, SizableText, YStack, styled } from 'tamagui'
import { RFValue } from 'react-native-responsive-fontsize'
import { Zocial } from '@expo/vector-icons'

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
  backgroundColor: COLORS.BLUE,
  borderRadius: '$8',
  gap: '$2',
  padding: '$2',
})

const ButtonText = styled(SizableText, {
  fontSize: '$5',
  color: COLORS.WHITE,
})

interface ButtonSocialGoogleProps {
  onPress: () => void
  title?: string
}

const ButtonSocialFacebook = forwardRef<TouchableOpacity, ButtonSocialGoogleProps>(
  ({ onPress, title }, ref) => {
    return (
      <Button onPress={onPress}>
        <Zocial name="facebook" size={20} color={COLORS.WHITE} style={{marginBottom: 4}} />
        <ButtonText>{title ?? 'Facebook'}</ButtonText>
      </Button>
    )
  }
)

export default ButtonSocialFacebook
