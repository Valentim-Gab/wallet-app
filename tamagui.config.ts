import { createAnimations } from '@tamagui/animations-react-native'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui, styled, SizableText, H1, YStack, createFont } from 'tamagui'

import { COLORS } from '@/styles/theme'

const animations = createAnimations({
  bouncy: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
    type: 'spring',
  },
  lazy: {
    damping: 20,
    type: 'spring',
    stiffness: 60,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
    type: 'spring',
  },
})

const createPoppins = createFont({
  family: 'PoppinsRegular',
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 23,
    9: 30,
    10: 46,
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134,
  },
})

const headingFont = createPoppins

const bodyFont = createPoppins

export const Container = styled(YStack, {
  flex: 1,
  padding: 24,
})

export const Main = styled(YStack, {
  flex: 1,
  justifyContent: 'space-between',
  maxWidth: 960,
})

export const Title = styled(H1, {
  color: '#000',
  size: '$12',
})

export const Subtitle = styled(SizableText, {
  color: '#38434D',
  size: '$9',
})

export const Button = styled(YStack, {
  alignItems: 'center',
  backgroundColor: COLORS.PURPLE,
  borderRadius: 8,
  hoverStyle: {
    backgroundColor: '#5a5fcf',
  },
  justifyContent: 'center',
  maxWidth: 500,
  padding: 16,
  shadowColor: '#000',
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
})

export const ButtonText = styled(SizableText, {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
})

const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes: {
    ...themes,
    light: {
      background: '#fff',
      backgroundHover: '#fff',
      backgroundPress: '#fff',
      backgroundFocus: '#fff',
      borderColor: '#fff',
      color: '#000',
    },
    dark: {
      background: '#111',
      backgroundHover: '#111',
      backgroundPress: '#111',
      backgroundFocus: '#111',
      borderColor: '#111',
      color: '#fff',
    },
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

type AppConfig = typeof config

// Enable auto-completion of props shorthand (ex: jc="center") for Tamagui templates.
// Docs: https://tamagui.dev/docs/core/configuration

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
