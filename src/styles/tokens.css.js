/*
 * Design tokens
 */

const { modularScale, rem } = require('polished')

const createScale = (ratio, base) => (steps) => `${modularScale(steps, base, ratio)}rem`

const ROOT_FONT_SIZE = 18
const BREAKPOINTS = {
  '2xs': `${rem(480)}`,
  xs: `${rem(576)}`,
  sm: `${rem(768)}`,
  oldweb: `${rem(992)}`,
  md: `${rem(1024)}`,
  lg: `${rem(1200)}`,
  xl: `${rem(1366)}`,
}
const lineHeightScale = createScale(1.25, 24)

const TOKENS = {
  spaces: {
    0: 0,
    px: '1px',
    0.5: rem(2, ROOT_FONT_SIZE),
    1: rem(4, ROOT_FONT_SIZE),
    1.5: rem(6, ROOT_FONT_SIZE),
    2: rem(8, ROOT_FONT_SIZE),
    2.5: rem(10, ROOT_FONT_SIZE),
    3: rem(12, ROOT_FONT_SIZE),
    3.5: rem(14, ROOT_FONT_SIZE),
    4: rem(16, ROOT_FONT_SIZE),
    5: rem(20, ROOT_FONT_SIZE),
    6: rem(24, ROOT_FONT_SIZE),
    7: rem(28, ROOT_FONT_SIZE),
    8: rem(32, ROOT_FONT_SIZE),
    9: rem(36, ROOT_FONT_SIZE),
    10: rem(40, ROOT_FONT_SIZE),
    11: rem(44, ROOT_FONT_SIZE),
    12: rem(48, ROOT_FONT_SIZE),
    14: rem(56, ROOT_FONT_SIZE),
    16: rem(64, ROOT_FONT_SIZE),
    20: rem(80, ROOT_FONT_SIZE),
    24: rem(96, ROOT_FONT_SIZE),
    28: rem(112, ROOT_FONT_SIZE),
  },
  colors: {
    // Lightest to darkest
    neutral: {
      100: '#ffffff',
      200: '#151515',
      300: '#000000',
    },
    green: {
      100: '#2AE19F',
      200: '#33EC9E',
      300: '#AADDD4',
    },
    pink: {
      100: '#EDBAFF',
    },
    red: {
      100: '#ffabb1',
    },
    yellow: {
      100: '#fff2ab',
    },
    purple: {
      100: '#e1d1ff',
    },
  },
  borderRadius: {
    0: 0,
    1: `${rem(8)}`,
    2: `${rem(24)}`,
  },
  borderWidths: {
    0: 0,
    1: `${rem(1.5)}`,
    3: `${rem(3.5)}`,
    4: `${rem(4)}`,
  },
  fontFamilies: {
    body: ['IBM Plex Mono', 'mono'],
    display: ['Orbitron', 'mono'],
  },
  fontWeights: {
    600: 600,
    800: 800,
  },
  fontSizes: {
    px: `${ROOT_FONT_SIZE}px`,
    xs: rem(12.5, ROOT_FONT_SIZE),
    'xs-min': rem(13.5, ROOT_FONT_SIZE),
    sm: rem(15, ROOT_FONT_SIZE),
    'base-min': rem(16, ROOT_FONT_SIZE),
    base: '1rem',
    md: rem(21.6, ROOT_FONT_SIZE),
    lg: rem(25.92, ROOT_FONT_SIZE),
    xl: rem(31.1, ROOT_FONT_SIZE),
    xxl: rem(37.52, ROOT_FONT_SIZE),
    'display-1': rem(43, ROOT_FONT_SIZE),
    'display-2': rem(53.75, ROOT_FONT_SIZE),
    'display-3': rem(64.5, ROOT_FONT_SIZE),
    'display-4': rem(74.4, ROOT_FONT_SIZE),
  },
  lineHeights: {
    0: lineHeightScale(0),
    1: lineHeightScale(1),
    2: lineHeightScale(2),
    3: lineHeightScale(3),
    4: lineHeightScale(4),
    5: lineHeightScale(5),
  },
  letterSpacings: {
    0: 0,
    1: '0.05em',
    2: '0.1em',
    2.5: '0.14em',
    3: '0.18em',
  },
  zIndex: {
    below: '-1',
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    5: 5,
    10: 10,
    20: 20,
    30: 30,
    50: 50,
  },
}

module.exports = {
  BREAKPOINTS,
  TOKENS,
  ROOT_FONT_SIZE,
}
