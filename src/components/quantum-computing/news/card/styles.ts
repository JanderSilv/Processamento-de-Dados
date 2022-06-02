import { css } from 'src/styles/stitches.config'

export const newsCard = css({
  maxWidth: 400,
  height: '100%',
  borderRadius: 14,

  backgroundColor: 'hsl(227.1, 51.7%, 40.6%)',
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',

  '& > a.news-card__read': {
    width: 'fit-content',
    padding: '0 $3 $3',
    color: 'white',
    display: 'block',
  },
})

export const newsCard__container = css({
  '& > div.news-card__content': {
    padding: '$3',
    color: 'white',

    '& > h3': {
      fontSize: '$4',
      color: 'inherit',
    },

    '& > p': {
      marginTop: '$3',
      fontSize: '$3',
      color: 'inherit',
    },
  },
})
