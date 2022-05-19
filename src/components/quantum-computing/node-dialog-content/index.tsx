import { Description, Title } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { CardProps } from '../card'
import { nodeDialogContent } from './styles'

const defaultImage = {
  src: '/assets/quantum/quantum-computing.jpg',
  alt: 'Ilustração de processador com um símbolo de um átomo',
  width: 670,
  height: 697,
}

export const NodeDialogContent = ({ content, image, title }: CardProps) => {
  const imageData = image || defaultImage
  return (
    <section className={nodeDialogContent()}>
      <picture>
        <Image {...imageData} src={imageData.src} alt={imageData.alt} objectFit="contain" draggable="false" />
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
