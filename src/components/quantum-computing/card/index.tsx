import Image from 'next/image'
import { Trigger } from '@radix-ui/react-dialog'
import { Handle, Position } from 'react-flow-renderer'
import { card } from './styles'

type Image = {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}

export type CardProps = {
  id: number
  image?: Image
  title: string
  content: string
  isActive: boolean
  isLastCard: boolean
  nodes: number[]
}
type CardNode = {
  data: CardProps
}

export const Card = ({ data: { image, title, id, isActive, isLastCard } }: CardNode) => (
  <Trigger className={card({ isActive })} disabled={!isActive}>
    <picture className="card__image">
      <Image
        src={image?.src || '/assets/quantum/quantum-computing.jpg'}
        alt={image?.alt}
        layout="fill"
        objectFit="cover"
        draggable="false"
      />
    </picture>
    <h2>{title}</h2>
    {!isLastCard && <Handle id={id.toString()} type="source" position={Position.Right} isConnectable={false} />}
    {id !== 1 && <Handle id={id.toString()} type="target" position={Position.Left} isConnectable={false} />}
  </Trigger>
)
