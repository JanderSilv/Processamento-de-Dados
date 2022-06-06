import { css } from 'src/styles/stitches.config'

export const banner = css({
  minHeight: 400,
  backgroundColor: '#EEEEEE',

  '& > div.banner__container': {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: '$8',

    '@md': {
      flexDirection: 'row',
    },

    '& > div': {
      padding: '$7',
      flex: 1,
      transform: 'translateY(-7rem)',

      '@md': {
        transform: 'unset',
      },

      '& > h1': {
        color: '$blue100',
        fontSize: '$7',
        fontWeight: 'bold',
      },
      '& > p': {
        marginTop: '$3',
        fontSize: '$4',
        fontWeight: 500,
        lineHeight: '30px',
      },
    },

    '& > picture': {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    },
  },
})
