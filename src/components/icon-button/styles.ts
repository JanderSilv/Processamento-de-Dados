import { css } from 'src/styles/stitches.config'

export const button = css({
  border: 'none',
  borderRadius: '$button',
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  '&:focus-visible': {
    outline: '2px solid $blue100',
  },

  '& > svg': {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
})
