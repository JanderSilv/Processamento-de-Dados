import { css } from 'src/styles/stitches.config'

export const card = css({
  minWidth: 240,
  maxWidth: 500,
  minHeight: 200,

  borderRadius: 14,
  backgroundColor: '$blue100',
  border: 'none',
  transition: 'all 0.2s ease-in-out',

  display: 'flex',
  alignItems: 'stretch',
  position: 'relative',

  '& > .card__image': {
    width: '100%',
    minWidth: 200,
    borderRadius: '14px 0 0 14px',

    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  '& > h2': {
    minWidth: 100,
    padding: '$3',

    color: 'white',
    fontSize: '$5',
    fontFamily: '$montserrat',

    flex: 1.4,
    alignSelf: 'center',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: '$blue100',
        opacity: 1,
        cursor: 'pointer',

        '&:hover': {
          transform: 'scale(1.05)',
        },
        '&:active': {
          transform: 'scale(0.9)',
        },
      },
      false: {
        '&::before': {
          content: '""',
          borderRadius: 14,
          background: 'rgba(0, 0, 0, 0.3)',
          opacity: 0.8,

          display: 'block',
          cursor: 'default',
          position: 'absolute',
          inset: 0,
          zIndex: 50,
        },
      },
    },
  },
})
;('&')
