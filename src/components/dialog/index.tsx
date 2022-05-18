import { ReactNode } from 'react'
import * as Primitive from '@radix-ui/react-dialog'
import { MdClose as CloseIcon } from 'react-icons/md'

import { makeClassName } from 'src/helpers'
import { IconButton } from '../icon-button'
import { closeButton, content, overlay } from './styles'

type Classes = {
  overlay?: string
  content?: string
  closeButton?: string
}

type DialogProps = {
  classes?: Classes
  children: ReactNode
}

export const Dialog = ({ children, classes }: DialogProps) => (
  <Primitive.Portal>
    <Primitive.Overlay className={makeClassName([overlay(), classes?.overlay])} />
    <Primitive.Content className={makeClassName([content(), classes?.content])}>
      {children}
      <Primitive.Close className={makeClassName([closeButton(), classes?.closeButton])} asChild>
        <IconButton>
          <CloseIcon color="white" />
        </IconButton>
      </Primitive.Close>
    </Primitive.Content>
  </Primitive.Portal>
)
