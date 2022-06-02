import { css } from 'src/styles/stitches.config'

export const link = css({
  fontFamily: '$montserrat',
  fontWeight: 'normal',
  textDecoration: 'none',

  variants: {
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
})
