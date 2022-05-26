import { css, keyframes } from 'src/styles/stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const overlay = css({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  position: 'fixed',
  inset: 0,
  zIndex: 50,

  transition: 'opacity 400ms ease-in-out',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
})

export const content = css({
  width: '95vw',
  height: '95vh',

  backgroundColor: '$grayTwo400',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  overflowY: 'auto',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 100,

  '&:focus': { outline: 'none' },
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
})

export const closeButton = css({
  width: '40px',
  height: '40px',
  padding: '0.2rem',
  borderRadius: '50%',

  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 150,
  transition: 'all 0.2s ease-in-out',

  '&:is(:hover, :focus-visible)': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  '&:focus-visible': {
    outline: '1px solid $greenThree100',
  },
})
