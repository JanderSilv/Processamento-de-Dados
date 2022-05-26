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
    '& > span': {
      position: 'sticky !important',
      top: 30,
    },
    '& > a': {
      width: 'fit-content',
      marginTop: '$1',
      fontSize: '$2',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5ch',
    },
  },
  '& > main': {
    flex: 1.5,
    width: '100%',

    '& > h2': {
      fontSize: '$6',
    },
  },
})

export const nodeDialogContent__mainContent = css({
  marginTop: '$7',

  '& .mb-3': {
    marginBottom: '$3',
  },

  '& div.ndc__carousel-item-container': {
    minHeight: 600,
  },

  '& h3': {
    fontSize: '$4',
    textAlign: 'left',
  },

  '& p': {
    marginTop: '$4',
    fontSize: '$4',
    lineHeight: '27px',
    textAlign: 'left',
  },

  '& ol, & ul': {
    paddingTop: '$1',
    paddingLeft: '$4',

    '& > li::marker': {
      fontFamily: '$montserrat',
    },
    '& > li': {
      marginTop: '$1',
    },
  },

  '& div.media-container': {
    overflow: 'hidden',
    position: 'relative',

    '&::after': {
      content: '""',
      paddingTop: '56.25%',
      display: 'block',
    },

    '&& > :is(iframe, video)': {
      width: '100%',
      height: '100%',
      margin: 0,
      position: 'absolute',
      top: '0',
      left: '0',
    },
  },
})
