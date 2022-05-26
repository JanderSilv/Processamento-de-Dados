// styles
import React from 'react'
import { steps } from './steps'
import { Container } from './styles'

// types
import { WhenToUseParallelismProps } from './types'

export function WhenToUseParallelism(props: WhenToUseParallelismProps) {
  const { onGoBackButtonClick } = props

  const [currentPage, setCurrentPage] = React.useState(0)

  function handlePrevious() {
    setCurrentPage(currentPage - 1)
  }

  function handleNext() {
    setCurrentPage(currentPage + 1)
  }

  return (
    <Container
      color="purple"
      currentPage={currentPage}
      numberOfPages={steps.length}
      onGoBackButtonClick={onGoBackButtonClick}
      onClickPrevious={handlePrevious}
      onClickNext={handleNext}
      onClickPage={setCurrentPage}
    >
      {steps[currentPage]}
    </Container>
  )
}
