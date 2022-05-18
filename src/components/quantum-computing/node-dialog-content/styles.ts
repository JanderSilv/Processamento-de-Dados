import { css } from 'src/styles/stitches.config'

export const nodeDialogContent = css({
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
    '&> h2': {
      fontSize: '$6',
    },

    '& > p': {
      marginTop: '$4',
      fontSize: '$4',
      lineHeight: 1.25,
    },
  },
})
