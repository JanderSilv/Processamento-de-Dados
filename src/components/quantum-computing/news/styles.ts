import { css } from 'src/styles/stitches.config'

export const news = css({
  marginBlock: '$7',
  paddingInline: '$3',

  '& h2': {
    marginBottom: '$3',
    color: '$blue100',
  },
})

export const newsCarousel__container = css({
  '&& .news-carousel__item': {
    padding: '$1',

    '&:first-child': {
      paddingLeft: '0',
    },
  },
})
