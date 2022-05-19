import { Title } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { NodeCardProps } from '../node-card'
import { nodeDialogContent } from './styles'

type ContentCarouselProps = {
  content: string[]
}

const ContentCarousel = ({ content }: ContentCarouselProps) => (
  <Carousel>
    {content.map((item, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: item ?? '' }} />
    ))}
  </Carousel>
)

const defaultImage = {
  src: '/assets/quantum/quantum-computing.jpg',
  alt: 'Ilustração de processador com um símbolo de um átomo',
  width: 670,
  height: 697,
}

export const NodeDialogContent = ({ content, image, title }: NodeCardProps) => {
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
        <div>
          {Array.isArray(content) ? (
            <ContentCarousel content={content} />
          ) : (
            <p dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
      </main>
    </section>
  )
}
