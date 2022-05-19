import { HTMLAttributes } from 'react'
import { makeClassName } from 'src/helpers'
import { css } from 'src/styles/stitches.config'

export const limitContainer = css({
  maxWidth: '$limit',
  marginInline: 'auto',
})

type LimitContainerProps = HTMLAttributes<HTMLDivElement>

export const LimitContainer = ({ children, className }: LimitContainerProps) => (
  <div className={makeClassName([limitContainer(), className])}>{children}</div>
)
