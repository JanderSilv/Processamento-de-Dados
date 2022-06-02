import Image from 'next/image'
import { Link } from 'src/components/link'
import { newsCard, newsCard__container } from './styles'

type Image = {
  src: string
  width?: string | number
  height?: string | number
  alt?: string
}

type CardProps = {
  image: Image
  title: string
  description: string
  url: string
}

export const NewsCard = (props: CardProps) => {
  const { description, image, title, url } = props
  return (
    <div className={newsCard()}>
      <div className={newsCard__container()}>
        <Link href={url} draggable="false" openInNewTab>
          <Image {...image} width={400} height={221} />
        </Link>
        <div className="news-card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <Link href={url} className="news-card__read" openInNewTab>
        Ler notícia
      </Link>
    </div>
  )
}
