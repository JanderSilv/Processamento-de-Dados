// styles
import {
  Container,
  GoBack,
  LeftArrowIcon,
  Navigator,
  NavigatorBullet,
  NextButton,
  NextContainer,
  PreviousButton,
  PreviousContainer,
  RightArrowIcon,
} from './styles'

// types
import { ExpandedSubjectProps } from './types'

export function ExpandedSubject(props: ExpandedSubjectProps) {
  const { currentPage, numberOfPages, color, className, children, onGoBackButtonClick, onClickPrevious, onClickNext } =
    props

  function renderNavigation() {
    const bullets: JSX.Element[] = []

    for (let i = 0; i < numberOfPages; i++) {
      bullets.push(<NavigatorBullet key={i} active={i === currentPage} />)
    }

    return <Navigator>{bullets}</Navigator>
  }

  function renderGoPrevious() {
    if (currentPage === 0) return null

    return (
      <PreviousContainer onClick={onClickPrevious}>
        <PreviousButton>
          <LeftArrowIcon />
        </PreviousButton>
      </PreviousContainer>
    )
  }

  function renderGoNext() {
    if (currentPage === numberOfPages - 1) return null

    return (
      <NextContainer onClick={onClickNext}>
        <NextButton>
          <RightArrowIcon />
        </NextButton>
      </NextContainer>
    )
  }

  return (
    <Container className={className} color={color}>
      {children}

      {renderNavigation()}

      {renderGoPrevious()}
      {renderGoNext()}

      <GoBack onClick={onGoBackButtonClick} />
    </Container>
  )
}
