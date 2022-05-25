// styles
import React from 'react'
import { steps } from './steps'
import { Container } from './styles'
// types
import { GPUvsCPUProps } from './types'

export function GPUvsCPU(props: GPUvsCPUProps) {
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
      color="red"
      currentPage={currentPage}
      numberOfPages={steps.length}
      onGoBackButtonClick={onGoBackButtonClick}
      onClickPrevious={handlePrevious}
      onClickNext={handleNext}
    >
      {steps[currentPage]}
    </Container>
  )
}
