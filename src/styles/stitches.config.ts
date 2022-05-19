import { createStitches } from '@stitches/core'

export const { css, config, keyframes } = createStitches({
  theme: {
    colors: {
      blue100: 'hsla(227, 76%, 62%, 1)',
      blue200: 'hsla(227, 76%, 62%, 0.8)',
      blue400: 'hsla(227, 76%, 62%, 0.6)',
      blue600: 'hsla(227, 76%, 62%, 0.4)',

      green100: ' hsla(159, 52%, 61%, 1)',
      green200: ' hsla(159, 52%, 61%, 0.8);',
      green400: ' hsla(159, 52%, 61%, 0.6);',
      green600: ' hsla(159, 52%, 61%, 0.4);',

      red100: 'hsla(353, 77%, 61%,1)',
      red200: 'hsla(353, 77%, 61%,0.8)',
      red400: 'hsla(353, 77%, 61%,0.6)',
      red600: 'hsla(353, 77%, 61%,0.4)',

      purple100: 'hsla(281, 51%, 65%, 1);',
      purple200: 'hsla(281, 51%, 65%, 0.8);',
      purple400: 'hsla(281, 51%, 65%, 0.6);',
      purple600: 'hsla(281, 51%, 65%, 0.4);',

      orange100: 'hsla(25, 77%, 61%,1)',
      orange200: 'hsla(25, 77%, 61%,0.8)',
      orange400: 'hsla(25, 77%, 61%,0.6)',
      orange600: 'hsla(25, 77%, 61%,0.4)',
    },
    fontSizes: {
      1: '0.625rem', // 10px
      2: '0.875rem', // 14px
      3: '1rem', // 16px
      4: '1.25rem', // 20px
      5: '1.5rem', // 24px
      6: '1.75rem', // 28px
      7: '2.875rem', // 46px
      8: '3.25rem', // 52px
      9: '4.5rem', // 72px
      10: '6.25rem', // 100px
    },
    fonts: {
      montserrat: 'Montserrat, apple-system, sans-serif',
    },
    space: {
      1: '0.5rem', // 8px
      2: '0.875rem', // 14px
      3: '1rem', // 16px
      4: '1.25rem', // 20px
      5: '1.5rem', // 24px
      6: '1.75rem', // 28px
      7: '2rem', // 32px
      8: '2.5rem', // 40px
      9: '2.875rem', // 46px
      10: '3rem', // 48px
      11: '3.5rem', // 56px
      12: '4rem', // 64px
      13: '4.5rem', // 72px
      14: '5rem', // 80px
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      limit: '1280px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      button: '5px',
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 900px)',
    lg: '(min-width: 1200px)',
    xl: '(min-width: 1536px)',
    xxl: '(min-width: 1930px)',
  },
})
