import { AnchorHTMLAttributes } from 'react'
import { VariantProps } from '@stitches/core'
import { makeClassName } from 'src/helpers'
import { link } from './styles'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    openInNewTab?: boolean
  }

const newTabArgs = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const Link = (props: LinkProps) => {
  const { href, children, className, underline, openInNewTab, ...rest } = props

  return (
    <a
      {...rest}
      href={href}
      className={makeClassName([link({ underline }), className])}
      {...(openInNewTab ? newTabArgs : {})}
    >
      {children || href}
    </a>
  )
}
