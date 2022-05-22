// deps
import styled from 'styled-components'

// utils
import { colors } from '../../utils'

// assets
import { BiChevronLeft } from 'react-icons/bi'

// types
import { ContainerProps, NavigatorBulletProps } from './types'

export const Container = styled.div<ContainerProps>`
  height: 36rem;
  width: 100%;
  padding: 3rem 6rem;

  position: relative;

  background: ${({ color }) => colors.background[color].normal};

  color: ${colors.foreground.white.light};

  h1 {
    margin-bottom: 1rem;

    font-size: 2rem;
    font-weight: 600;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;

    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 0.75rem;
  }
`

export const GoBack = styled(BiChevronLeft)`
  width: 4.5rem;
  height: 4.5rem;
  left: 1rem;
  top: 1rem;

  position: absolute;
  cursor: pointer;

  border-radius: 96rem;
  color: ${colors.foreground.white.light};

  :hover {
    background: rgba(255, 255, 255, 0.1);
    transition: 0.1s;
  }
`

export const Navigator = styled.nav`
  bottom: 2rem;
  left: 6rem;

  position: absolute;
  display: flex;
  gap: 0.5rem;
`

export const NavigatorBullet = styled.div<NavigatorBulletProps>`
  width: 1rem;
  height: 1rem;

  border-radius: 96rem;

  background: ${colors.foreground.white.light};
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`

export const PreviousContainer = styled.div``
