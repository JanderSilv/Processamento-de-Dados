// deps
import styled from 'styled-components'

// components
import { ExpandedSubject } from '..'

export const Container = styled(ExpandedSubject)`
  width: 100%;

  display: grid;

  grid-template-columns: auto auto;
  grid-template-areas: 'text image';
`

export const Text = styled.div`
  height: max-content;
  padding-right: 3rem;

  grid-area: text;
`

export const ImageContainer = styled.div`
  width: 50rem;
  height: 100%;

  grid-area: image;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 -6rem -3rem 0;
`

export const Image = styled.img`
  object-fit: cover;
`
