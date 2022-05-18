import { Description, Title } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { CardProps } from '../card'
import { nodeDialogContent } from './styles'

export const NodeDialogContent = ({ content, image, title }: CardProps) => {
  return (
    <section className={nodeDialogContent()}>
      <picture>
        <Image
          {...image}
          src={image.src || '/assets/quantum/quantum-computing.jpg'}
          alt={image.alt}
          objectFit="contain"
          draggable="false"
        />
      </picture>
      <main>
        <Title asChild>
          <h2>{title}</h2>
        </Title>
        <Description asChild>
          <p dangerouslySetInnerHTML={{ __html: content ?? '' }} />
        </Description>
      </main>
    </section>
  )
}
