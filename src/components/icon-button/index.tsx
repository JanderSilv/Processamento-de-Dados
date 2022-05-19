import { ButtonHTMLAttributes } from 'react'
import { VariantProps } from '@stitches/core'
import { makeClassName } from 'src/helpers'
import { button } from './styles'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>

export const IconButton = (props: IconButtonProps) => {
  const { children, className, ...rest } = props
  return (
    <button {...rest} className={makeClassName([button(), className])}>
      {children}
    </button>
  )
}
