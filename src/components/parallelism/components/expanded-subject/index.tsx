// styles
import { Container, GoBack, Navigator, NavigatorBullet } from './styles'

// types
import { ExpandedSubjectProps } from './types'

export function ExpandedSubject(props: ExpandedSubjectProps) {
  const { currentPage, numberOfPages, color, className, children, onGoBackButtonClick } = props

  function renderNavigation() {
    const bullets: JSX.Element[] = []

    for (let i = 0; i < numberOfPages; i++) {
      bullets.push(<NavigatorBullet active={i === currentPage} />)
    }

    return <Navigator>{bullets}</Navigator>
  }

  function renderGoPrevious() {
    return null
  }

  return (
    <Container className={className} color={color}>
      <GoBack onClick={onGoBackButtonClick} />

      {children}

      {renderNavigation()}

      {renderGoPrevious()}
    </Container>
  )
}
