import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { newsData } from './data'
import { LimitContainer } from 'src/components/limit-container'
import { NewsCard } from './card'
import { news, newsCarousel__container } from './styles'

const responsive = {
  lg: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 20,
  },
  md: {
    breakpoint: { max: 1024, min: 780 },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 20,
  },
  sm: {
    breakpoint: { max: 780, min: 500 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 20,
  },
  xs: {
    breakpoint: { max: 500, min: 380 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 60,
  },
  xxs: {
    breakpoint: { max: 380, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
}

export const News = () => (
  <section className={news()}>
    <LimitContainer>
      <h2>NOTÍCIAS RECENTES</h2>
      <Carousel
        containerClass={newsCarousel__container()}
        itemClass="news-carousel__item"
        responsive={responsive}
        shouldResetAutoplay={false}
        autoPlay={false}
        partialVisible
        renderButtonGroupOutside
      >
        {newsData.map(news => (
          <NewsCard key={news.title} {...news} />
        ))}
      </Carousel>
    </LimitContainer>
  </section>
)
