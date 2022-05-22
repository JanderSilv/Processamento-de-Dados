import React from 'react'

export interface ExpandedSubjectProps {
  color: 'orange' | 'purple' | 'green' | 'red'
  currentPage: number
  numberOfPages: number

  className?: string
  children?: React.ReactNode

  onGoBackButtonClick?(): void
  onClickNext?(): void
  onClickPrevious?(): void
}

export interface ContainerProps {
  color: 'orange' | 'purple' | 'green' | 'red'
}

export interface NavigatorBulletProps {
  active: boolean
}
