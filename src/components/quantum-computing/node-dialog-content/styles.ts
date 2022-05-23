import { css } from 'src/styles/stitches.config'

export const nodeDialogContent = css({
  height: '100%',
  padding: '$10 $7',
  color: 'white',
  borderRadius: 20,
  backgroundColor: 'hsl(227.6, 58.7%, 43.7%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '$7',

  '@md': {
    paddingBlock: '$7',
    flexDirection: 'row',
  },

  '& > picture': {
    flex: 1,
  },

  '& > main': {
    flex: 1.5,
    width: '100%',
    '&> h2': {
      fontSize: '$6',
    },

    '& p': {
      marginTop: '$4',
      fontSize: '$4',
      lineHeight: '27px',
      textAlign: 'left',
    },

    '& div.iframe-container': {
      overflow: 'hidden',
      position: 'relative',

      '&::after': {
        content: '""',
        paddingTop: '56.25%',
        display: 'block',
      },

      '&& > iframe': {
        width: '100%',
        height: '100%',
        margin: 0,
        position: 'absolute',
        top: '0',
        left: '0',
      },
    },
  },
})
