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
      '& > h1': {
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
