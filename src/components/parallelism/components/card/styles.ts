// deps
import styled from 'styled-components'

// utils
import { colors } from 'src/components/parallelism/utils'

// types
import { ContainerProps } from './types'

export const Container = styled.div<ContainerProps>`
  width: 30rem;

  border-radius: 1rem;
  background: ${({ color }) => color};
  cursor: pointer;

  :hover {
    transform: scale(102%);
    transition: 0.1s;
  }
`

export const Image = styled.img`
  width: 30rem;
  height: 25rem;

  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
  mix-blend-mode: screen;
`

export const Text = styled.div`
  padding: 1.5rem;
`

export const Title = styled.h2`
  margin-bottom: 0.5rem;

  font-size: 2rem;
  color: ${colors.foreground.white.light};
  font-weight: 500;
`

export const Subtitle = styled.h3`
  color: ${colors.foreground.white.light};
  font-size: 1.25rem;
  font-weight: 400;
`
